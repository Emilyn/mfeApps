import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../services/analytics.service';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'child1-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  validate;

  loginForm: UntypedFormGroup;

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = new UntypedFormGroup({
      username: new UntypedFormControl('', [Validators.required]),
      password: new UntypedFormControl('')
    })
  }

  submit() {
    this.validate = true;
    if (this.loginForm.valid) {
      const data = this.loginForm.value;
      console.log(data);
    }
  }

}
