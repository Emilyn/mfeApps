import { Component, ElementRef, Input, OnInit, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'common-input',
  templateUrl: './common-input.component.html',
  styleUrls: ['./common-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CommonInputComponent),
      multi: true
    }
  ]
})


export class CommonInputComponent implements ControlValueAccessor {

  value = '';

  onChange: (value?: any) => void;

  onTouch: (event: any) => void;

  @Input() placeholder = '';

  @Input() autoFocus = false;

  @Input() isDisabled: boolean;

  @Input() inputType: boolean;

  @Input() edit: boolean;

  @Input() fxFlex;

  @ViewChild('input', {static: false}) input: ElementRef;

  ngAfterViewInit() {
    if(this.autoFocus) {
      this.onFocus()
    }
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisableState(status: boolean) {
    this.isDisabled = status;
  }

  onInput(value) {
    if(this.onChange) {
      this.onChange(value);
    }
  }

  onTouched(value) {
    if(this.onTouch) {
      this.onTouch(value)
    }
  }

  onFocus() {
    //Normal Focus Method
    this.input.nativeElement.focus();

    // Another Method for set Focus
    //  this.input.nativeElement.select();
  }
}

