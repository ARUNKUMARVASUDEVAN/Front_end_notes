from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import AuthenticationForm
from django.contrib import messages
from .forms import signupform, loginForm

# Create your views here.
# def index(request):
#     if request.method == 'POST':
#         # Handle signup form
#         if 'signup' in request.POST:  # Check if signup form was submitted
#             signup_form = signupform(request.POST)
#             if signup_form.is_valid():
#                 signup_form.save()  # Save the user
#                 username = signup_form.cleaned_data.get('username')
#                 password = signup_form.cleaned_data.get('password1')  # Use password1 for signup forms
#                 user = authenticate(username=username, password=password)
#                 if user is not None:
#                     login(request, user)
#                     messages.success(request, "Signup successful. You are now logged in.")
#                     #return redirect('dashboard')  # Redirect to a dashboard or some other page after login
#                 else:
#                     messages.error(request, "Authentication failed after signup.")
#             else:
#                 messages.error(request, "Invalid signup form submission.")

#         # Handle login form
#         elif 'login' in request.POST:  # Check if login form was submitted
#             login_form = loginForm(request, data=request.POST)
#             if login_form.is_valid():
#                 user = login_form.get_user()
#                 login(request, user)
#                 messages.success(request, "Login successful.")
#                 #return redirect('dashboard')  # Redirect to a dashboard or some other page after login
#             else:
#                 messages.error(request, "Invalid login credentials.")
    
#     else:
#         signup_form = signupform()
#         login_form = loginForm()

#     return render(request, 'wedd.html', {
#         'signup_form': signup_form,
#         'login_form': login_form,
#     })


def index(request):
    if request.method == 'POST':
        signup_form = signupform(request.POST)
        login_form = loginForm(request.POST)
        
        if signup_form.is_valid():
            signup_form.save()
            return redirect('/dashboard')  
        
        elif login_form.is_valid():
            login_form.save()
            return redirect('/dashboard')  
    
    else:
        signup_form = signupform()
        login_form = loginForm()
    
    return render(request, 'wedd.html', {
        'signup_form': signup_form,
        'login_form': login_form,
    })

from .forms import catering_form
def cat_view(request):
    if request.method=='POST':
        cat_form=catering_form(request.POST)

        if cat_form.is_valid():
            cat_form.save()
            return redirect('/')
    else:
        cat_form=catering_form()
          
    return render(request, 'cf.html',{
        'catering_form':cat_form,
    })
