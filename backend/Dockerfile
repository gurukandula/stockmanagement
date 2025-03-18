# Use official Python image as base
FROM python:3.12-slim

# Set the working directory inside the container
WORKDIR /app

# Install dependencies
COPY requirements.txt /app/
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy project files into the container
COPY . /app/

# Expose the port Gunicorn will use
EXPOSE 8000

# Set the environment variable for Django settings
ENV DJANGO_SETTINGS_MODULE=backend.settings

# Run the application with Gunicorn
CMD ["gunicorn", "backend.wsgi:application", "--bind", "0.0.0.0:8000"]
