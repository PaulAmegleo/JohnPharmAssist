from rest_framework import generics
from .models import Meds
from .serializers import MedsSerializer
from rest_framework.generics import ListCreateAPIView
from rest_framework.response import Response
from rest_framework import status

from django.shortcuts import render

def front(request):
    context = {
        }

    return render(request, "index.html", context)

class MedsList(ListCreateAPIView):
    queryset = Meds.objects.all()
    serializer_class = MedsSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class MedsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Meds.objects.all()
    serializer_class = MedsSerializer
