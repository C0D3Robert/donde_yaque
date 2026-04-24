# catalogo/views.py
from rest_framework import generics
from .models import Categoria, Prenda
from .serializers import CategoriaSerializer, PrendaSerializer

class CategoriaListView(generics.ListAPIView):
    """Devuelve solo categorías activas"""
    queryset = Categoria.objects.filter(activa=True)
    serializer_class = CategoriaSerializer

class PrendaListView(generics.ListAPIView):
    """
    Filtra por:
    - ?categoria=slug  (filtro por categoría)
    - ?seccion=nuevo|popular
    - Sin parámetros = todas
    """
    serializer_class = PrendaSerializer

    def get_queryset(self):
        queryset = Prenda.objects.filter(activa=True)
        categoria_slug = self.request.query_params.get('categoria')
        seccion = self.request.query_params.get('seccion')

        if categoria_slug:
            queryset = queryset.filter(categoria__slug=categoria_slug, categoria__activa=True)
        if seccion == 'nuevo':
            queryset = queryset.filter(es_nuevo=True)
        elif seccion == 'popular':
            queryset = queryset.filter(es_popular=True)
        
        return queryset.select_related('categoria')