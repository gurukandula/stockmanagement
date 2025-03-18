from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import StockItemSerializer
from .dynamodb import table

@api_view(['GET'])
def list_items(request):
    try:
        response = table.scan()  # Scan to get all items from DynamoDB table
        items = response.get("Items", [])
        return Response(items)
    except Exception as e:
        return Response({"error": str(e)}, status=500)