from django.urls import path
from .views import MedsList, MedsDetail, MedsDelete

urlpatterns = [
    path('meds/', MedsList.as_view(), name='meds-list-create'),
    path('meds/<int:pk>/', MedsDetail.as_view(), name='meds-detail'),
    path('meds/<int:pk>/delete', MedsDelete.as_view(), name='meds-delete'),

    # Add other URLs as needed
]