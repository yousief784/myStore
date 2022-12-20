import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-check-out-form',
  templateUrl: './check-out-form.component.html',
  styleUrls: ['./check-out-form.component.css'],
})
export class CheckOutFormComponent implements OnInit {
  fullName: string = '';
  address: string = '';
  @Input() confirmTotal: number = 0;
  @Input() creditCard = '';
  @Output() creditCartEvent: EventEmitter<string> = new EventEmitter();

  constructor(private route: Router) {}

  ngOnInit(): void {}

  validateForm = new FormGroup({
    fullNameValidate: new FormControl('', [
      Validators.required,
      Validators.min(3),
    ]),
    addressValidate: new FormControl('', [
      Validators.required,
      Validators.min(6),
    ]),
    creditCardValidate: new FormControl('', [
      Validators.required,
      Validators.min(16),
      Validators.pattern('^[0-9]*$'),
    ]),
  });

  formSubmit = () => {
    console.log(this.validateForm.controls.creditCardValidate.errors);
    this.route.navigate(['/confirmation'], {
      queryParams: { name: this.fullName, total: this.confirmTotal },
    });
  };

  creditCardChange(eventValue: any) {
    this.creditCartEvent.emit(eventValue);
  }
}
