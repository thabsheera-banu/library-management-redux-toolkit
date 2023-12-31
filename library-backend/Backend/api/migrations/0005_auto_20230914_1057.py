# Generated by Django 3.2.21 on 2023-09-14 05:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_customeruser'),
    ]

    operations = [
        migrations.AddField(
            model_name='customeruser',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='customeruser',
            name='is_staff',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='customeruser',
            name='last_login',
            field=models.DateTimeField(blank=True, null=True, verbose_name='last login'),
        ),
        migrations.AlterField(
            model_name='customeruser',
            name='password',
            field=models.CharField(max_length=128, verbose_name='password'),
        ),
    ]
