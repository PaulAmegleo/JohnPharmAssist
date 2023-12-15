from django.contrib import admin

# Register your models here.

from django.contrib import admin
from .models import Meds

class MedsAdmin(admin.ModelAdmin):
    list_display = ('medId', 'medName', 'medType', 'manufacturer', 'dosage', 'ageGroup', 'availability')
    list_filter = ('medType', 'manufacturer', 'ageGroup', 'availability')
    search_fields = ('medName', 'manufacturer', 'dosage')

admin.site.register(Meds, MedsAdmin)
