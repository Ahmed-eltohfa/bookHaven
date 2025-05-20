from django.core import serializers
from django.shortcuts import render, get_object_or_404
from .models import Book 
from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt

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
        try:
            # Parse JSON data from request body
            data = json.loads(request.body)
            
            # Create the book 
            book = Book.objects.create(
                name=data['name'],
                author=data['author'],
                year=int(data.get('year', 1925)),
                genre=data['genre'],
                cover=data.get('cover', ''),
                description=data['description'],
                rating=float(data.get('rating', 0)),
                reviews=int(data.get('reviews', 0)),
                language=data.get('language', 'English'),
                release_date=data.get('release_date', '1925-04-10'),
                is_available=data.get('is_available', True),
                history={}
            )

            return JsonResponse({
                'status': 'success', 
                'book_id': book.id
            })
            
        except json.JSONDecodeError:
            return JsonResponse(
                {'status': 'error', 'message': 'Invalid JSON data'}, 
                status=400
            )
        except Exception as e:
            return JsonResponse(
                {'status': 'error', 'message': str(e)}, 
                status=500
            )
    
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=400)


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