# catalogo/admin.py
from django.contrib import admin
from .models import Categoria, Prenda

@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'slug', 'activa', 'orden')
    list_filter = ('activa',)
    search_fields = ('nombre',)
    prepopulated_fields = {'slug': ('nombre',)}
    list_editable = ('orden', 'activa')

@admin.register(Prenda)
class PrendaAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'categoria', 'precio', 'es_nuevo', 'es_popular', 'activa', 'fecha_creacion')
    list_filter = ('categoria', 'es_nuevo', 'es_popular', 'activa')
    search_fields = ('nombre', 'descripcion')
    list_editable = ('precio', 'es_nuevo', 'es_popular', 'activa')
    readonly_fields = ('fecha_creacion',)
    fieldsets = (
        ('Información', {'fields': ('nombre', 'descripcion', 'imagen', 'precio', 'categoria')}),
        ('Badges y visibilidad', {'fields': ('es_nuevo', 'es_popular', 'activa')}),
        ('Metadata', {'fields': ('fecha_creacion',), 'classes': ('collapse',)}),
    )