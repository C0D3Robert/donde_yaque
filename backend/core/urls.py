# core/urls.py
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

# URL ofuscada para el panel de administración (cambia 'gestion-secreta-2025' por tu propia cadena)
admin_url = 'gestion-catalogo-donde-yaque'

urlpatterns = [
    path(admin_url, admin.site.urls),
    path('', include('catalogo.urls')),
]

# Servir archivos media en desarrollo (en producción lo hará Nginx)
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)