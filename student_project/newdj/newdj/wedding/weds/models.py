from django.db import models

# Create your models here.
class catering(models.Model):  # Renamed to PascalCase
    name = models.CharField(max_length=255)
    email=models.EmailField()
    howmany=models.IntegerField()
    time=models.TimeField()
    date=models.DateField()
    phone_number=models.IntegerField()

    class Meta:
        verbose_name_plural = 'Catering'

    def __str__(self):
        return self.name
    

class underwater(models.Model):  # Renamed to PascalCase
    name = models.CharField(max_length=255)
    email=models.EmailField()
    arrival_time=models.TimeField()
    reception=[
        ('Daytime only','Daytime only'),
        ('Daytime & Evening','Daytime & Evening'),
        ('Evening only','Evening only'),
        ('Full day','Full day')
    ]
    type_of_reception=models.CharField(max_length=250,choices=reception)
    date=models.DateField()
    phone_number=models.IntegerField()

    class Meta:
        verbose_name_plural = 'UnderWater'

    def __str__(self):
        return self.name
    

class venue(models.Model):  # Renamed to PascalCase
    venue_name = models.CharField(max_length=255)
    standing_capacity=models.IntegerField()
    seating_capting=models.IntegerField()
    address=models.CharField(max_length=255)
    country=[
        ('India','India'),
        ('Australia','Australia'),
        ('Maldives','Maldives'),
        ('US','US'),
        ('Asia','Asia'),
        ('Dubai','Dubai')
    ]
    country=models.CharField(max_length=250,choices=country)
    pincode=models.IntegerField()
    booking_Type=[
        ('First Hslf','First Half'),
        ('Second Half','Second Hslf'),
        ('Full time','Full time')
    ]
    booking_type=models.CharField(max_length=200,choices=booking_Type)
    phone_number=models.IntegerField()

    class Meta:
        verbose_name_plural = 'venue'

    def __str__(self):
        return self.venue_name
    
class makeup(models.Model):  # Renamed to PascalCase
    name = models.CharField(max_length=255)
    email=models.EmailField()
    phone_number=models.IntegerField()
    address=models.CharField(max_length=255)
    pincode=models.IntegerField()
    wedding_date=models.DateField()
    hair_services=[
        ('Bride','Bride'),
        ('Wedding Party','Wedding Party'),
        ('Flower girl','Flower girl')
    ]
    hair=models.CharField(max_length=200,choices=hair_services)

    
    makeup_services=models.CharField(max_length=200,choices=hair_services)

    hair_services=[
        ('Ultimate Package','Ultimate Package'),
        ('Gold Package','Gold Package'),
        ('Silver Package','Silver Package'),
        ('Bronze Package','Bronze Package')

    ]


    class Meta:
        verbose_name_plural = 'makeup'

    def __str__(self):
        return self.name 

class contactus(models.Model):  # Renamed to PascalCase
    name = models.CharField(max_length=255)
    email=models.EmailField()
    phone_number=models.IntegerField()
    line=models.TextField()

    class Meta:
        verbose_name_plural = 'contact'

    def __str__(self):
        return self.name
    

