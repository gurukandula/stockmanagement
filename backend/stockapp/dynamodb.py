import boto3
from django.conf import settings  # Import settings from Django

# Initialize the boto3 session using values from Django settings
session = boto3.session.Session(
    aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
    aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,
    region_name=settings.AWS_REGION,
)

# Create the DynamoDB resource using the session
dynamodb = session.resource("dynamodb")

# Access the DynamoDB table using the table name from settings
table = dynamodb.Table(settings.DYNAMODB_TABLE)
