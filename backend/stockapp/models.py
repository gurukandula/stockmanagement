from django.db import models

class StockItem(models.Model):
    id = models.CharField(max_length=255, primary_key=True)
    name = models.CharField(max_length=255)
    quantity = models.IntegerField()
    price = models.FloatField()

    def __str__(self):
        return self.name
