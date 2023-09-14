# from django.urls import path
# from . import views

# urlpatterns = [
#     # path('', views.index, name='index'),
#     path('register', views.SignupView.as_view(), name='signup'),
#     path('signin', views.SigninView.as_view(), name='signin'),

# ]
# urls.py

# from django.urls import path
# from .views import UserRegistrationView

# urlpatterns = [
#     path('register/', UserRegistrationView.as_view(), name='user-registration'),
#     # path('signin/', CustomObtainJWTView.as_view(), name='user-signin'),
#     # path('refresh-token/', CustomRefreshJWTView.as_view(), name='refresh-token'),
# ]

# api/urls.py

from django.urls import path
from .views import register_user, user_login ,AllBooksListView

urlpatterns = [
    # path('register/', register_user.as_view()),
    path('books/', AllBooksListView.as_view()),


    path('register/', register_user, name='register_user'),
    path('signin/', user_login, name='user_login'),
    # Add other API endpoints as needed
]

