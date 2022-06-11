from django.conf.urls import url
from calc import views

urlpatterns = [
    url('', views.index, name='index'),
]
