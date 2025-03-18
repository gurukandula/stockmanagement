from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('backend.stockapp.urls')),  # This includes the API URLs from stockapp
]
