## 📝 TodoApp (React + Django REST Framework)

A full-stack Todo application built with **React (frontend)** and **Django REST Framework (backend)**.
It supports user authentication and full CRUD operations for todos.

---

## 🌐 Live Demo

👉 **Website URL:**
(https://todosharp.netlify.app/)

---

## 🚀 Features

* 🔐 User Signup & Login (Token Authentication)
* 👤 User-specific todo lists
* 📋 Create, Read, Update, Delete todos
* ⚡ React Router navigation
* 🎨 Bootstrap / React-Bootstrap UI
* 🔗 REST API with Django REST Framework
* 💾 Persistent login using localStorage

---

## 🧱 Project Structure

```
todoapp/
│
├── frontend/                  # React frontend
├── todobackend/              # Django backend
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone repository

```bash
git clone https://github.com/your-username/todoapp.git
cd todoapp
```

---

## 🐍 Backend Setup (Django)

```bash
cd todobackend

python -m venv venv
source venv/bin/activate   # Mac/Linux
venv\Scripts\activate      # Windows

pip install -r requirements.txt
```

### Run migrations

```bash
python manage.py migrate
```

### Start server

```bash
python manage.py runserver
```

Backend runs at:

```
http://127.0.0.1:8000/
```

---

## 🌐 Frontend Setup (React)

```bash
cd frontend
npm install
npm start
```

Frontend runs at:

```
http://localhost:3000/
```

---

## 🔗 API Endpoints

| Method | Endpoint        | Description   |
| ------ | --------------- | ------------- |
| POST   | /api/signup/    | Register user |
| POST   | /api/login/     | Login user    |
| GET    | /api/todos/     | Get todos     |
| POST   | /api/todos/     | Create todo   |
| PUT    | /api/todos/:id/ | Update todo   |
| DELETE | /api/todos/:id/ | Delete todo   |

---

## 🔐 Authentication Flow

* User logs in or signs up
* Backend returns a **token**
* Token stored in `localStorage`
* Token sent with API requests

---

## 🛠 Tech Stack

### Frontend

* React 18
* React Router DOM
* React Bootstrap
* Axios

### Backend

* Django
* Django REST Framework
* SQLite
* Token Authentication

---

## 👨‍💻 Author

* Rishav (risCodeSharp)
* GitHub: [https://github.com/risCodeSharp/todo_django-react/](https://github.com/risCodeSharp/todo_django-react/)

---

## 📜 License

This project is for learning purposes and is open-source.


