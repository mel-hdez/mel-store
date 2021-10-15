import {Component} from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})

export class productComponent {

  product: Product = {
    id: '1',
    image: 'assets/images/home1.png',
    title: 'Home 1',
    price: 25000,
    description: 'Vista home 1'
  }
}
