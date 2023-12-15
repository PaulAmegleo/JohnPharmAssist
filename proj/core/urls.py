from django.urls import path
from .views import MedsList, MedsDetail

urlpatterns = [
    path('meds/', MedsList.as_view(), name='meds-list-create'),
    path('meds/<int:pk>/', MedsDetail.as_view(), name='meds-detail'),
    # Add other URLs as needed
]