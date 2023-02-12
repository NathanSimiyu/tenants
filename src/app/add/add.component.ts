import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  tenantform: FormGroup ;
  constructor(private formBuilder: FormBuilder){

      this.tenantform = this.formBuilder.group({
        firstname:['', Validators. required],
        lastName:['', Validators. required],
        email:['',[ Validators. required, Validators.email]],
        phone:['', Validators.required],
        address:['', Validators.required]
      });
    }
    ngOnInit() {}
  }
function ngOnInit() {
  throw new Error('Function not implemented.');
}

