import { Component, EventEmitter, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  turnOn: boolean = false;
  message: string = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.alert.subscribe(alert => {
      if(alert !== ''){
        this.turnOn = true
      }
      this.message = alert
    })
  }
}
