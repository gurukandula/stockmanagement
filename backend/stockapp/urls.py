from django.urls import path
from .views import list_items  # Only import list_items

urlpatterns = [
    path('list_items/', list_items, name='list_items'),  # Keep only the list_items URL
]
