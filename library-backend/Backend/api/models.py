from django.db import models
from django.contrib.auth.hashers import make_password
# Create your models here.



class CustomerUser(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    email = models.EmailField(unique=True)
    address = models.TextField()
    college = models.CharField(max_length=100)
    password = models.CharField(max_length=255)
    def save(self, *args, **kwargs):
        self.password = make_password(self.password)
        super().save(*args, **kwargs)
    

class Category(models.Model):
    title = models.CharField(max_length=100)
    def __str__(self):
        return self.title

class Book(models.Model):
    title = models.CharField(max_length=100)
    category = models.ForeignKey(Category,on_delete=models.CASCADE)
    def __str__(self):
        return self.title
