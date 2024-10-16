# Generated by Django 5.1 on 2024-09-14 06:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('weds', '0002_catering_delete_testcategory'),
    ]

    operations = [
        migrations.CreateModel(
            name='underwater',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=254)),
                ('arrival_time', models.TimeField()),
                ('type_of_reception', models.CharField(choices=[('Daytime only', 'Daytime only'), ('Daytime & Evening', 'Daytime & Evening'), ('Evening only', 'Evening only'), ('Full day', 'Full day')], max_length=250)),
                ('date', models.DateField()),
                ('phone_number', models.IntegerField()),
            ],
            options={
                'verbose_name_plural': 'UnderWater',
            },
        ),
    ]
