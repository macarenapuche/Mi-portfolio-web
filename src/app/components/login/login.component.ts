import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  username: FormGroup | undefined;
  password: FormGroup | undefined;
//username y password --> fijarme si están bien definidas o no hacen falta. 

  constructor(private formBuilder: FormBuilder) { 
    this.form=this.formBuilder.group ({
      username: ['', []] ,
      password: ['', []],
    })

  }

  ngOnInit(): void {
  }

}
