
from django.contrib.auth.hashers import check_password
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
# from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from .models import CustomerUser,Book
from .serializers import CustomUserSerializer,BookSerializer
from rest_framework.generics import ListAPIView


# user registration view
@api_view(['POST'])
def register_user(request):
    serializer = CustomUserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        refresh = RefreshToken.for_user(user)
        data = {
            'user': serializer.data,
            'token': {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }
        }
        return Response(data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




# user login view
@api_view(['POST'])
def user_login(request):
    email = request.data.get('email').lower()
    print(email)
    password = request.data.get('password')

    user = CustomerUser.objects.filter(email=email).first()
    print('user-----------',user)

    if user:
        if check_password(password, user.password):
            serializer = CustomUserSerializer(user)
            refresh = RefreshToken.for_user(user)
            data = {
                'user': serializer.data,
                'token': {
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                }
            }
            return Response(data, status=status.HTTP_200_OK)

    return Response({'detail': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


#To list all books
class AllBooksListView(ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
