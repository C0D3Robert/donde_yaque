# catalogo/models.py
import os
from django.db import models
from django.core.exceptions import ValidationError
from PIL import Image

def validar_imagen_segura(image):
    """
    Valida que el archivo subido sea una imagen real,
    que tenga extensión permitida y no exceda 5MB.
    """
    # Extensión permitida
    ext = os.path.splitext(image.name)[1].lower()
    if ext not in ['.jpg', '.jpeg', '.png', '.webp']:
        raise ValidationError("Formato no permitido. Use JPG, PNG o WEBP.")

    # Tamaño máximo 5MB
    if image.size > 5 * 1024 * 1024:
        raise ValidationError("La imagen no puede superar los 5MB.")

    # Verificar que sea una imagen válida (evita archivos con código malicioso)
    try:
        img = Image.open(image)
        img.verify()
        # Volver a abrir porque verify() cierra el puntero
        img = Image.open(image)
        img.format  # Forzar lectura del formato
    except Exception as e:
        raise ValidationError(f"Archivo de imagen no válido: {e}")

    

class Categoria(models.Model):
    nombre = models.CharField(max_length=50, unique=True)
    slug = models.SlugField(unique=True)
    activa = models.BooleanField(default=True, verbose_name="Visible en el catálogo")
    orden = models.PositiveIntegerField(default=0, verbose_name="Orden de aparición")

    class Meta:
        ordering = ['orden', 'nombre']
        verbose_name = "Categoría"
        verbose_name_plural = "Categorías"

    def __str__(self):
        return self.nombre
    


class Prenda(models.Model):
    nombre = models.CharField(max_length=50)  # Más largo para descripciones detalladas
    descripcion = models.TextField(blank=True, max_length=300)
    imagen = models.ImageField(upload_to='prendas/', validators=[validar_imagen_segura])
    precio = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    categoria = models.ForeignKey(Categoria, on_delete=models.SET_NULL, null=True, blank=True, related_name='prendas')
    
    # Badges
    es_nuevo = models.BooleanField(default=False, verbose_name="Badge 'Nuevo' (dorado)")
    es_popular = models.BooleanField(default=False, verbose_name="Badge 'Popular' (blanco)")
    
    # Ya no usamos temporada
    activa = models.BooleanField(default=True, verbose_name="Visible en catálogo")
    fecha_creacion = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-fecha_creacion']
        verbose_name = "Prenda"
        verbose_name_plural = "Prendas"

    def __str__(self):
        return self.nombre