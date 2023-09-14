from django.contrib import admin
from .models import Book,Category,CustomerUser

# Register your models here.
admin.site.register(CustomerUser)
admin.site.register(Book)
admin.site.register(Category)

