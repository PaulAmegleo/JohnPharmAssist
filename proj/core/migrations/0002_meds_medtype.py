# Generated by Django 5.0 on 2023-12-05 11:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='meds',
            name='medType',
            field=models.CharField(choices=[('Tablet', 'Tablet'), ('Capsule', 'Capsule'), ('Liquid', 'Liquid')], default='---', max_length=100),
        ),
    ]
