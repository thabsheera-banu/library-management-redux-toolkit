from rest_framework  import serializers
from .models import CustomerUser,Category,Book
class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerUser
        fields =['id',  'name', 'phone', 'email','address', 'college', 'password']
class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields =['id',  'title', 'category']
        depth = 1
