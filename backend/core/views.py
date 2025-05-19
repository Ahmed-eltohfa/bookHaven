from django.shortcuts import render, get_object_or_404
from .models import Book 


# Create your views here.
def index(request):
    return render(request, 'index.html')
def about(request):
    return render(request, 'about.html')
def addBook(request,book_id):
    return render(request, 'addBook.html', {'book_id': book_id})  # Pass book_id to the template
def bookDetails(request, book_id):  # ✅ Add book_id as a parameter
    book = get_object_or_404(Book, id=book_id)  # Fetch the book or return 404
    return render(request, 'bookDetails.html', {'book': book})
def listAdmin(request):
    return render(request, 'listAdmin.html')
def login(request):
    return render(request, 'login.html')
def profile(request):
    return render(request, 'profile.html')
def search(request):
    return render(request, 'search.html')
def signup(request):
    return render(request, 'signup.html')
