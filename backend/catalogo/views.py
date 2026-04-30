# catalogo/views.py
from rest_framework import generics
from django.shortcuts import get_object_or_404
from django.db.models import Q
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
    - ?search=query  (búsqueda por nombre o descripción)
    - Sin parámetros = todas
    """
    serializer_class = PrendaSerializer

    def get_queryset(self):
        queryset = Prenda.objects.filter(activa=True)
        categoria_slug = self.request.query_params.get('categoria')
        seccion = self.request.query_params.get('seccion')
        search_query = self.request.query_params.get('search')

        if categoria_slug:
            queryset = queryset.filter(categoria__slug=categoria_slug, categoria__activa=True)
        if seccion == 'nuevo':
            queryset = queryset.filter(es_nuevo=True)
        elif seccion == 'popular':
            queryset = queryset.filter(es_popular=True)
        
        # Búsqueda por nombre o descripción
        if search_query:
            queryset = queryset.filter(
                Q(nombre__icontains=search_query) | 
                Q(descripcion__icontains=search_query)
            )
        
        return queryset.select_related('categoria')
    
class PrendaDetailView(generics.RetrieveAPIView):
    """
    Endpoint para obtener una prenda específica por su ID.
    
    URL: /prendas/<id>/
    
    Retorna los detalles de la prenda si existe y está activa,
    o un error 404 si no se encuentra.
    """
    serializer_class = PrendaSerializer
    
    def get_queryset(self):
        # Solo devuelve prendas activas
        return Prenda.objects.filter(activa=True)
    
    def get_object(self):
        # Obtiene el ID de la URL y busca la prenda
        prenda_id = self.kwargs.get('pk')
        return get_object_or_404(Prenda, id=prenda_id, activa=True)