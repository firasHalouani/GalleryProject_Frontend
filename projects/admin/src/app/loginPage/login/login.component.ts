import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],   
      password: ['', [Validators.required]],
      rememberMe: [false]
    });
  }

  onSubmit() { 
    if (this.loginForm.valid) { 
      console.log(this.loginForm.value);
      this.router.navigate(['/accueil']); // Redirection vers la page d'accueil après la connexion
    } else {
      console.log('Le formulaire est invalide');
    }
  }
}
