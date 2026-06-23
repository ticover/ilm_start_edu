# IlmStart EDU 🎓

**LMS-система для учебных центров** — управление учениками, расписанием, оплатами, тестами и результатами в одном приложении.

> **Ilm Start** (узб. _Ilm_ — знание) — платформа для автоматизации работы образовательных центров.

---

## ✨ Возможности

### 👤 Три роли пользователей

| Роль | Доступ |
|------|--------|
| **Администратор** | Полный контроль: ученики, учителя, группы, оплаты, расписание, новости |
| **Учитель** | Перекличка, выставление оценок, темы уроков, создание тестов |
| **Ученик** | Расписание, результаты, оплаты, онлайн-тесты, уведомления |

### 📋 Функциональность

- **Управление пользователями** — добавление учеников и учителей с автогенерацией логинов (`STU1001`, `TCH1001`)
- **Группы и предметы** — привязка учеников к группам, назначение учителя и предмета
- **Расписание** — расписание по дням недели для каждой группы
- **Оплаты** — учёт оплат по месяцам (Оплачено / Не оплачено / Частично)
- **Посещаемость** — отметка присутствия с комментариями (Пришёл / Опоздал / Уважительная причина)
- **Результаты и оценки** — выставление оценок учителем, история по ученику
- **Тесты** — создание тестов с вопросами (4 варианта ответа), прохождение онлайн
- **Темы уроков** — журнал пройденных тем
- **Новости и объявления** — информирование всех пользователей
- **Уведомления** — персональные уведомления при обновлении оплат и оценок
- **PWA** — устанавливается как приложение на телефон

---

## 🚀 Быстрый старт (локально)

### Требования
- Python 3.10+

### Установка

```bash
# 1. Клонировать репозиторий
git clone https://github.com/ticover/ilm_start_edu.git
cd ilm_start_edu

# 2. Создать виртуальное окружение
python -m venv venv

# Windows
venv\Scripts\activate

# Linux / macOS
source venv/bin/activate

# 3. Установить зависимости
pip install -r requirements.txt

# 4. Запустить
python app.py
```

Открыть в браузере: **http://127.0.0.1:5000**

### Демо-аккаунты

| Роль | Логин | Пароль |
|------|-------|--------|
| Администратор | `admin` | `admin123` |
| Учитель | `TCH1001` | `123456` |
| Ученик | `STU1001` | `123456` |
| Ученик | `STU1002` | `123456` |

> ⚠️ Смените пароль администратора сразу после первого входа.

---

## ☁️ Деплой на Railway

Проект настроен для деплоя в один клик через [Railway](https://railway.app).

### Шаги

1. Зайди на [railway.app](https://railway.app) → **New Project** → **Deploy from GitHub repo**
2. Выбери `ticover/ilm_start_edu`
3. В разделе **Variables** добавь переменную:
   ```
   SECRET_KEY = <длинный случайный ключ, минимум 32 символа>
   ```
4. Для сохранения базы данных: **Add Volume** → Mount path `/app/data`
5. Railway автоматически обнаружит `Procfile` и запустит приложение

### Переменные окружения

| Переменная | Описание | Пример |
|------------|----------|--------|
| `SECRET_KEY` | Секретный ключ Flask (обязательно!) | `a8f3k2...` |

---

## 🖥️ Деплой на VPS (Ubuntu)

Подробная инструкция: см. файл [`DEPLOY_SERVER_UBUNTU.txt`](DEPLOY_SERVER_UBUNTU.txt)

Кратко: **Nginx + Gunicorn + systemd**

```bash
# На сервере Ubuntu 22.04+
sudo apt install python3 python3-venv nginx -y
git clone https://github.com/ticover/ilm_start_edu.git /var/www/ilmstart
cd /var/www/ilmstart
python3 -m venv venv && source venv/bin/activate
pip install -r requirements.txt
gunicorn wsgi:app --bind 0.0.0.0:8000
```

---

## 🗂️ Структура проекта

```
ilm_start_edu/
├── app.py                  # Основное Flask-приложение
├── wsgi.py                 # Entry point для Gunicorn
├── requirements.txt        # Зависимости Python
├── Procfile                # Конфиг запуска для Railway
├── runtime.txt             # Версия Python
├── .env.example            # Пример переменных окружения
├── static/
│   ├── css/style.css
│   ├── js/
│   │   ├── main.js
│   │   └── service-worker.js   # PWA
│   ├── images/
│   └── manifest.json           # PWA manifest
└── templates/
    ├── base.html
    ├── login.html
    ├── admin_dashboard.html
    ├── teacher_dashboard.html
    ├── student_dashboard.html
    └── ...                     # 20+ шаблонов
```

---

## 🗄️ База данных

SQLite (`database.db`). При первом запуске создаётся автоматически с демо-данными.

**Таблицы:**
`users` · `subjects` · `groups_table` · `group_students` · `schedule` · `payments` · `attendance` · `results` · `topics` · `tests` · `test_questions` · `test_attempts` · `test_answers` · `news` · `announcements` · `notifications`

---

## 🛠️ Технологии

- **Backend:** Python 3.11, Flask 3.0, Werkzeug, SQLite
- **Frontend:** HTML5, CSS3, Bootstrap (via CDN), Vanilla JS
- **Server:** Gunicorn
- **PWA:** Service Worker, Web Manifest

---

## 📄 Лицензия

MIT License — свободно для использования и модификации.
