from django.shortcuts import render
from .models import Post
from .serializers import PostSerializer
from rest_framework import viewsets, permissions

# Create your views here.


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [
        permissions.AllowAny
    ]
