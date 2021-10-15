import { NumberFormatStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Product} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mel-store';
  /* array de productos */
  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/home1.png',
      title: 'Home 1',
      price: 25000,
      description: 'Vista home 1'
    },
    {
      id: '2',
      image: 'assets/images/home2.png',
      title: 'Home 2',
      price: 25000,
      description: 'Vista home 2'
    },
    {
      id: '3',
      image: 'assets/images/home3.png',
      title: 'Home 3',
      price: 25000,
      description: 'Vista home 3'
    },
    {
      id: '4',
      image: 'assets/images/home4.png',
      title: 'Home 4',
      price: 25000,
      description: 'Vista home 4'
    },
    {
      id: '5',
      image: 'assets/images/home5.png',
      title: 'Home 5',
      price: 25000,
      description: 'Vista home 5'
    },
    {
      id: '6',
      image: 'assets/images/home6.png',
      title: 'Home 6',
      price: 25000,
      description: 'Vista home 6'
    },
    {
      id: '7',
      image: 'assets/images/home404.png',
      title: 'Home Error 404',
      price: 25000,
      description: 'Vista Error 404'
    },
    {
      id: '8',
      image: 'assets/images/home500.png',
      title: 'Home Error 500',
      price: 25000,
      description: 'Vista Error 500'
    },
  ];
  /* array de nombres aleatorios */
  items = ['mel','mar','bel'];
  /* función para agregar items a una lista */
  addItem(){
    this.items.push('Nuevo item');
  }
  /* función para eliminar un item, recibe el indice */
  deleteItem(index: number){
    this.items.splice(index, 1);
  }
}
