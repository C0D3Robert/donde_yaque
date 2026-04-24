# catalogo/serializers.py
from rest_framework import serializers
from .models import Categoria, Prenda

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = ['id', 'nombre', 'slug']

class PrendaSerializer(serializers.ModelSerializer):
    imagen_url = serializers.SerializerMethodField()
    categoria_nombre = serializers.CharField(source='categoria.nombre', read_only=True)
    categoria_slug = serializers.CharField(source='categoria.slug', read_only=True)

    class Meta:
        model = Prenda
        fields = [
            'id', 'nombre', 'descripcion', 'imagen_url', 'precio',
            'categoria', 'categoria_nombre', 'categoria_slug',
            'es_nuevo', 'es_popular'
        ]

    def get_imagen_url(self, obj):
        request = self.context.get('request')
        if obj.imagen and request:
            return request.build_absolute_uri(obj.imagen.url)
        return None