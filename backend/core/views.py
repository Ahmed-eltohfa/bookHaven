from django.core import serializers
from django.shortcuts import render, get_object_or_404
from .models import Book 
from django.http import JsonResponse

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



def get_books(request):
    books = Book.objects.all()
    data = serializers.serialize('json', books)
    return JsonResponse({'books': data}, safe=False)

def add_book(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        author = request.POST.get('author')
        genre = request.POST.get('genre')
        publication_date = request.POST.get('publication_date')
        book = Book(title=title, author=author, genre=genre, publication_date=publication_date)
        book.save()
        return JsonResponse({'status': 'success', 'book_id': book.id})
    return JsonResponse({'status': 'error'}, status=400)

def delete_book(request):
    if request.method == 'POST':
        book_id = request.POST.get('book_id')
        try:
            book = Book.objects.get(id=book_id)
            book.delete()
            return JsonResponse({'status': 'success'})
        except Book.DoesNotExist:
            return JsonResponse({'status': 'error', 'message': 'Book not found'}, status=404)
    return JsonResponse({'status': 'error'}, status=400)