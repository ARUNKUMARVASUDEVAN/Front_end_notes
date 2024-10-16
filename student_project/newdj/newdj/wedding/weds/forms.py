from django import forms
from django.contrib.auth.forms import UserCreationForm,AuthenticationForm
from django.contrib.auth.models import User


class signupform(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'email', 'password1','password2']
        widgets={
            'username':forms.TextInput(attrs={
                'class':'transparent-input',
                'placeholder':'Enter Your UserName'
            }),
            'email':forms.EmailInput(attrs={
                'class':'transparent-input',
                'placeholder':'Enter your email'
            }),
            'password1':forms.PasswordInput(
                attrs={
                    'class':'transparent-input',
                    'placeholder':'Password'
                }
            ),
            'password2':forms.PasswordInput(
                attrs={
                    'class':'transparent-input',
                    'placeholder':'Password'
                }
            )
            }


class loginForm(AuthenticationForm):
    class Meta:
        pass 


from .models import catering

class catering_form(forms.Form):
    class Meta:
        model=catering
        fields=['name','email','people','time','date','number']
        widgets={
        'name': forms.TextInput(attrs={
                'id': 'name',
                'required': True,
                'placeholder': 'Enter your name'
            }),
            'email': forms.EmailInput(attrs={
                'id': 'email',
                'required': True,
                'placeholder': 'Enter your email'
            }),
            'howmany': forms.Select(choices=[
                ("", "1-100"),
                ("1", "1-200"),
                ("2", "1-500"),
                ("3", "1-1000"),
                ("4", "1-1500")
            ], attrs={
                'id': 'people',
                'required': True
            }),
            'time': forms.TimeInput(attrs={
                'id': 'time',
                'required': True,
                'placeholder': 'Time'
            }),
            'date': forms.DateInput(attrs={
                'id': 'date',
                'required': True,
                'placeholder': 'Date'
            }),
            'phone_number': forms.NumberInput(attrs={
                'id': 'number',
                'required': True,
                'placeholder': 'Phone Number'
            })
        }
    
    email = forms.EmailField(
        widget=forms.EmailInput(attrs={
            'id': 'email', 
            'required': True, 
            'placeholder': 'Enter your email'
        })
    )
    
    people = forms.ChoiceField(
        choices=[
            ("", "1-100"), 
            ("1", "1-200"), 
            ("2", "1-500"), 
            ("3", "1-1000"), 
            ("4", "1-1500")
        ],
        widget=forms.Select(attrs={'id': 'people', 'required': True})
    )
    
    time = forms.TimeField(
        widget=forms.TimeInput(attrs={
            'id': 'time', 
            'required': True, 
            'placeholder': 'Time'
        })
    )
    
    date = forms.DateField(
        widget=forms.DateInput(attrs={
            'id': 'date', 
            'required': True, 
            'placeholder': 'Date'
        })
    )
    
    number = forms.CharField(
        max_length=15,
        widget=forms.NumberInput(attrs={
            'id': 'number', 
            'required': True, 
            'placeholder': 'Phone Number'
        })
    )
    
    
    