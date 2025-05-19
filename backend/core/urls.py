from django.urls import path
from . import views

urlpatterns = [
    # Homepage
    path('', views.index, name='index'),

    # Static pages
    path('about/', views.about, name='about'),
    path('search/', views.search, name='search'),

    # User auth
    path('login/', views.login, name='login'),
    path('signup/', views.signup, name='signup'),
    path('profile/', views.profile, name='profile'),

    # Book management
    path('addBook/<int:book_id>/', views.addBook, name='addBook'),
    path('bookDetails/<int:book_id>/', views.bookDetails, name='bookDetails'),
    path('listAdmin', views.listAdmin, name='listAdmin'),
]