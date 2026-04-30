# catalogo/urls.py
from django.urls import path
from .views import CategoriaListView, PrendaListView, PrendaDetailView

urlpatterns = [
    path('api/categorias/', CategoriaListView.as_view(), name='categoria-list'),
    path('api/prendas/', PrendaListView.as_view(), name='prenda-list'),
    path('api/prendas/<int:pk>/', PrendaDetailView.as_view(), name='prenda-detail'),
]