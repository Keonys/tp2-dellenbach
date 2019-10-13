import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from '../models/Client';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  client : Client = new Client();
  dataForm : FormGroup;
  checkPsw : boolean = true;
  checkValid : boolean = false;
  checkForm : boolean = false;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      adresse: ['', Validators.required],
      cp: ['', Validators.required],
      ville: ['', Validators.required],
      tel: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10)])],
      mail: ['', Validators.compose([Validators.required, Validators.email])],
      civilite: ['', Validators.required],
      login: ['', Validators.required],
      password: ['', Validators.required],
      pays: ['', Validators.required]
    })
  }

  save() {
    this.checkValid = true;
    this.checkPsw = true;
  
    if(this.dataForm.valid) {
      this.checkForm = true;
      this.client.nom = this.dataForm.controls['nom'].value;
      this.client.prenom = this.dataForm.controls['prenom'].value;
      this.client.adresse = this.dataForm.controls['adresse'].value;
      this.client.cp = this.dataForm.controls['cp'].value;
      this.client.ville = this.dataForm.controls['ville'].value;
      this.client.tel = this.dataForm.controls['tel'].value;
      this.client.mail = this.dataForm.controls['mail'].value;
      this.client.civilite = this.dataForm.controls['civilite'].value;
      this.client.login = this.dataForm.controls['login'].value;
      this.client.password = this.dataForm.controls['password'].value;
    }
  }

  get getForm() {
    return this.dataForm.controls;
  }

  OnFormSubmit(formulaire:NgForm) {
    console.log(formulaire);
  }

  resetForm(formulaire:NgForm) {
    formulaire.resetForm();
  }
}
