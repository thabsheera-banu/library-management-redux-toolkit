# Generated by Django 3.2.21 on 2023-09-14 06:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_auto_20230914_1215'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customeruser',
            name='groups',
        ),
        migrations.RemoveField(
            model_name='customeruser',
            name='is_superuser',
        ),
        migrations.RemoveField(
            model_name='customeruser',
            name='user_permissions',
        ),
    ]
