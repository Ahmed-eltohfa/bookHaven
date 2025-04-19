// phone burger icon logic
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    document.body.classList.toggle('no-scroll');

});

// return to home funciton
const gohome = () => {
    window.location.href = '/index.html';
};
document.querySelector('.logo').addEventListener('click', gohome);

console.log("bitch");

// Books Data
const books = [
    {
        id: 1,
        name: "The Great Gatsby",
        year: 1925,
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        cover: "https://m.media-amazon.com/images/I/41BiT3sOQBL._SY445_SX342_.jpg",
        description: "A poignant exploration of wealth, love, and the American Dream set in the opulent 1920s, following the mysterious Jay Gatsby and his obsession with Daisy Buchanan.",
        rating: 4.5,
        reviews: 12000,
        language: "English",
        releaseDate: "1925-04-10",
        isAvailable: true
    },
    {
        id: 2,
        name: "To Kill a Mockingbird",
        year: 1960,
        author: "Harper Lee",
        genre: "Fiction",
        cover: "https://m.media-amazon.com/images/I/51N5qVjuKAL._SY445_SX342_.jpg",
        description: "A powerful novel that examines racial injustice and moral growth in the Deep South, seen through the eyes of young Scout Finch.",
        rating: 4.8,
        reviews: 15000,
        language: "English",
        releaseDate: "1960-07-11",
        isAvailable: true
    },
    {
        id: 3,
        name: "1984",
        year: 1949,
        author: "George Orwell",
        genre: "Dystopian",
        cover: "https://m.media-amazon.com/images/I/71rpa1-kyvL._SL1500_.jpg",
        description: "A chilling dystopia portraying a world under constant surveillance and authoritarian control, where truth is manipulated by the state.",
        rating: 4.6,
        reviews: 10000,
        language: "English",
        releaseDate: "1949-06-08",
        isAvailable: true
    },
    {
        id: 4,
        name: "Pride and Prejudice",
        year: 1813,
        author: "Jane Austen",
        genre: "Romance",
        cover: "https://m.media-amazon.com/images/I/51G7Ie1hExL._SY445_SX342_.jpg",
        description: "A classic romantic novel exploring themes of love, reputation, and class, centered around the spirited Elizabeth Bennet and the proud Mr. Darcy.",
        rating: 4.7,
        reviews: 9000,
        language: "English",
        releaseDate: "1813-01-28",
        isAvailable: true
    },
    {
        id: 5,
        name: "The Catcher in the Rye",
        year: 1951,
        author: "J.D. Salinger",
        genre: "Fiction",
        cover: "https://m.media-amazon.com/images/I/518dVCGFuhL._SY445_SX342_.jpg",
        description: "A raw, introspective tale of teenage angst and alienation, narrated by the iconic Holden Caulfield as he wanders through New York City.",
        rating: 4.4,
        reviews: 8000,
        language: "English",
        releaseDate: "1951-07-16",
        isAvailable: true
    },
    {
        id: 6,
        name: "The Lord of the Rings",
        year: 1954,
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        cover: "https://m.media-amazon.com/images/I/31fiP+vzJiL._SY445_SX342_.jpg",
        description: "An epic saga of good versus evil in Middle-earth, following Frodo Baggins and the Fellowship as they seek to destroy the One Ring.",
        rating: 4.9,
        reviews: 20000,
        language: "English",
        releaseDate: "1954-07-29",
        isAvailable: true
    },
    {
        id: 7,
        name: "Harry Potter and the Sorcerer's Stone",
        year: 1997,
        author: "J.K. Rowling",
        genre: "Fantasy",
        cover: "https://m.media-amazon.com/images/I/5152XTq24+L._SY445_SX342_.jpg",
        description: "The magical beginning of the beloved series, introducing Harry Potter and his first year at Hogwarts School of Witchcraft and Wizardry.",
        rating: 4.8,
        reviews: 25000,
        language: "English",
        releaseDate: "1997-06-26",
        isAvailable: true
    },
    {
        id: 8,
        name: "Atomic Habits",
        year: 2018,
        author: "James Clear",
        genre: "Self-help",
        cover: "https://m.media-amazon.com/images/I/81ANaVZk5LL._SL1500_.jpg",
        description: "A practical guide to building better habits and breaking bad ones, using proven psychological strategies for long-term change.",
        rating: 4.7,
        reviews: 18000,
        language: "English",
        releaseDate: "2018-10-16",
        isAvailable: true
    },
    {
        id: 9,
        name: "يوتوبيا",
        year: 2000,
        author: "أحمد خالد توفيق",
        genre: "خيال علمي",
        cover: "https://m.media-amazon.com/images/I/41omJqSEUYL.jpg",
        description: "رواية ديستوبية تستعرض انهيار المجتمع المصري وانقسامه إلى طبقات متطرفة في ظل نظام قمعي وفوضوي.",
        rating: 4.5,
        reviews: 5000,
        language: "عربي",
        releaseDate: "2000-01-01",
        isAvailable: true
    },
    {
        id: 10,
        name: "أرض زيكولا",
        year: 2007,
        author: "عمرو عبد الحميد",
        genre: "خيال علمي",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1441287700i/9753375.jpg",
        description: "رحلة خيالية إلى عالم زيكولا، حيث تُستخدم الذكاء كعملة، وتُقاس قيمة الإنسان بقدرته على التفكير والفهم.",
        rating: 4.6,
        reviews: 6000,
        language: "عربي",
        releaseDate: "2007-01-01",
        isAvailable: true
    },
    {
        id: 11,
        name: "Rich Dad Poor Dad",
        year: 1997,
        author: "Robert Kiyosaki",
        genre: "Self-help",
        cover: "https://m.media-amazon.com/images/I/51Hfv2MfNGL._SY445_SX342_.jpg",
        description: "A personal finance classic contrasting two mindsets — one focused on security, the other on financial freedom — and the lessons learned from both.",
        rating: 4.5,
        reviews: 30000,
        language: "English",
        releaseDate: "1997-04-01",
        isAvailable: true
    },
    {
        id: 12,
        name: "Sapiens: A Brief History of Humankind",
        year: 2011,
        author: "Yuval Noah Harari",
        genre: "History",
        cover: "https://m.media-amazon.com/images/I/713jIoMO3UL._SL1500_.jpg",
        description: "A sweeping narrative of human history, from the emergence of Homo sapiens to the technological revolutions shaping our future.",
        rating: 4.7,
        reviews: 22000,
        language: "English",
        releaseDate: "2011-06-04",
        isAvailable: true
    },
    {
        id: 13,
        name: "The Alchemist",
        year: 1988,
        author: "Paulo Coelho",
        genre: "Fiction",
        cover: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
        description: "A philosophical adventure following a young shepherd named Santiago on his quest to find a worldly treasure — and discover his personal legend.",
        rating: 4.6,
        reviews: 27000,
        language: "English",
        releaseDate: "1988-01-01",
        isAvailable: true
    },
    {
        id: 14,
        name: "The Subtle Art of Not Giving a F*ck",
        year: 2016,
        author: "Mark Manson",
        genre: "Self-help",
        cover: "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg",
        description: "A brutally honest self-help book that challenges conventional positivity and encourages living a meaningful life through values-based priorities.",
        rating: 4.4,
        reviews: 16000,
        language: "English",
        releaseDate: "2016-09-13",
        isAvailable: true
    },
    {
        id: 15,
        name: "Brave New World",
        year: 1932,
        author: "Aldous Huxley",
        genre: "Dystopian",
        cover: "https://m.media-amazon.com/images/I/416FntWyJQL._SY445_SX342_.jpg",
        description: "A haunting vision of a genetically engineered future where human emotion and individuality are sacrificed for social stability.",
        rating: 4.5,
        reviews: 8500,
        language: "English",
        releaseDate: "1932-01-01",
        isAvailable: true
    },
    {
        id: 16,
        name: "The Book Thief",
        year: 2005,
        author: "Markus Zusak",
        genre: "Historical Fiction",
        cover: "https://m.media-amazon.com/images/I/914cHl9v7oL._SL1500_.jpg",
        description: "Set in Nazi Germany, this heart-wrenching story follows a young girl who finds solace in books while chaos erupts around her.",
        rating: 4.7,
        reviews: 14000,
        language: "English",
        releaseDate: "2005-03-14",
        isAvailable: true
    },
    {
        id: 17,
        name: "The Road",
        year: 2006,
        author: "Cormac McCarthy",
        genre: "Post-apocalyptic",
        cover: "https://m.media-amazon.com/images/I/41GuWgTvzoL._SY445_SX342_.jpg",
        description: "A stark and poetic tale of a father and son journeying through a burned America in search of safety and humanity.",
        rating: 4.3,
        reviews: 9000,
        language: "English",
        releaseDate: "2006-09-26",
        isAvailable: true
    },
    {
        id: 18,
        name: "The Kite Runner",
        year: 2003,
        author: "Khaled Hosseini",
        genre: "Fiction",
        cover: "https://m.media-amazon.com/images/I/41fAt2RhwML._SY445_SX342_.jpg",
        description: "A gripping tale of friendship, betrayal, and redemption, tracing the lives of two boys in Afghanistan over several decades.",
        rating: 4.8,
        reviews: 22000,
        language: "English",
        releaseDate: "2003-05-29",
        isAvailable: true
    },
    {
        id: 19,
        name: "The Power of Now",
        year: 1997,
        author: "Eckhart Tolle",
        genre: "Spirituality",
        cover: "https://m.media-amazon.com/images/I/410hw6Q5a9L._SY445_SX342_.jpg",
        description: "A guide to spiritual enlightenment, teaching readers to live in the present moment and break free from the ego.",
        rating: 4.6,
        reviews: 17000,
        language: "English",
        releaseDate: "1997-09-27",
        isAvailable: true
    },
    {
        id: 20,
        name: "Man’s Search for Meaning",
        year: 1946,
        author: "Viktor E. Frankl",
        genre: "Memoir",
        cover: "https://m.media-amazon.com/images/I/51m5khg0C1L._SY445_SX342_.jpg",
        description: "A Holocaust survivor’s reflection on finding purpose through suffering and the human capacity for resilience and hope.",
        rating: 4.8,
        reviews: 20000,
        language: "English",
        releaseDate: "1946-01-01",
        isAvailable: true
    },
    {
        id: 21,
        name: "The Silent Patient",
        year: 2019,
        author: "Alex Michaelides",
        genre: "Thriller",
        cover: "https://m.media-amazon.com/images/I/41U2ykpD1QL._SY445_SX342_.jpg",
        description: "A shocking psychological thriller about a woman who stops speaking after committing a murder — and the therapist determined to uncover her truth.",
        rating: 4.5,
        reviews: 19000,
        language: "English",
        releaseDate: "2019-02-05",
        isAvailable: true
    },
    {
        id: 22,
        name: "Educated",
        year: 2018,
        author: "Tara Westover",
        genre: "Memoir",
        cover: "https://m.media-amazon.com/images/I/81WojUxbbFL.jpg",
        description: "A memoir of a young woman who grows up in a strict, isolated household in rural Idaho and escapes to pursue education.",
        rating: 4.7,
        reviews: 23000,
        language: "English",
        releaseDate: "2018-02-18",
        isAvailable: true
    },
    {
        id: 23,
        name: "The Four Agreements",
        year: 1997,
        author: "Don Miguel Ruiz",
        genre: "Self-help",
        cover: "https://m.media-amazon.com/images/I/81GqtNbs+PL.jpg",
        description: "A spiritual guide based on ancient Toltec wisdom that reveals four simple but powerful principles for personal freedom.",
        rating: 4.6,
        reviews: 11000,
        language: "English",
        releaseDate: "1997-11-07",
        isAvailable: true
    },
    {
        id: 24,
        name: "Ikigai: The Japanese Secret to a Long and Happy Life",
        year: 2016,
        author: "Héctor García & Francesc Miralles",
        genre: "Self-help",
        cover: "https://m.media-amazon.com/images/I/71tbalAHYCL.jpg",
        description: "A beautifully written book exploring the Japanese philosophy of purpose and longevity — what makes life truly worth living.",
        rating: 4.6,
        reviews: 15000,
        language: "English",
        releaseDate: "2016-09-01",
        isAvailable: true
    },
    {
        id: 25,
        name: "Thinking, Fast and Slow",
        year: 2011,
        author: "Daniel Kahneman",
        genre: "Psychology",
        cover: "https://m.media-amazon.com/images/I/41wI53OEpCL._SY445_SX342_.jpg",
        description: "A groundbreaking work on human decision-making, explaining how our minds operate with two systems: intuitive and rational thinking.",
        rating: 4.7,
        reviews: 18000,
        language: "English",
        releaseDate: "2011-10-25",
        isAvailable: true
    },
    {
        id: 26,
        name: "The 5 AM Club",
        year: 2018,
        author: "Robin Sharma",
        genre: "Self-help",
        cover: "https://m.media-amazon.com/images/I/81gTwYAhU7L.jpg",
        description: "A motivational guide that promotes waking up early to maximize productivity, health, and serenity in your daily life.",
        rating: 4.3,
        reviews: 10000,
        language: "English",
        releaseDate: "2018-12-04",
        isAvailable: true
    },
    {
        id: 27,
        name: "Deep Work",
        year: 2016,
        author: "Cal Newport",
        genre: "Productivity",
        cover: "https://m.media-amazon.com/images/I/51ygINtzhJL._SY445_SX342_QL70_FMwebp_.jpg",
        description: "A guide to achieving focused success in a distracted world by cultivating habits of deep, meaningful concentration.",
        rating: 4.6,
        reviews: 14000,
        language: "English",
        releaseDate: "2016-01-05",
        isAvailable: true
    },
    {
        id: 28,
        name: "الفيل الأزرق",
        year: 2012,
        author: "أحمد مراد",
        genre: "غموض نفسي",
        cover: "https://m.media-amazon.com/images/I/61409NTE2VL._SL1067_.jpg",
        description: "طبيب نفسي يعود للعمل بعد خمس سنوات ليجد نفسه متورطًا في قضية غريبة تغير حياته.",
        rating: 4.6,
        reviews: 8700,
        language: "عربي",
        releaseDate: "2012-10-01",
        isAvailable: true
    }
];


// Scroll to Top Button
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

scrollBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// exports
export { books };