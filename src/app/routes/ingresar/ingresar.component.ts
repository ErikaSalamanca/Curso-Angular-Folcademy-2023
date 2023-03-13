import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { IniciarsesionComponent } from './iniciarsesion/iniciarsesion.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css'],
  providers: [AuthService]
})



export class IngresarComponent {

  loginForm: FormGroup = this.FormBuilder.group({
    correo: ['', [Validators.email, Validators.required]],
    contrasena: ['', [Validators.required]]
  })

  constructor( 
    private FormBuilder: FormBuilder,
    private _authservice: AuthService
    
  ){}

  async ingresar(){

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched()
      return;
    } else {
      const info= await this._authservice.login(this.loginForm.controls['correo'].value, this.loginForm.controls['contrasena'].value,)
      localStorage.setItem('usuario', JSON.stringify(info))
    }
  }


  async ingresarConGoogle(){
    const info= await this._authservice.loginWithGoogle()
    localStorage.setItem('usuario', JSON.stringify(info))

  }

  campoEsValido (campo:string){
    return(
      this.loginForm.controls[campo].errors &&
      this.loginForm.controls[campo].touched
    )
  }

  register (){

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched()
      return;
    } else {
      this._authservice.register(this.loginForm.controls['correo'].value, this.loginForm.controls['contrasena'].value,)
    }
  }

}
