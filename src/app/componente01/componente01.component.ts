import { Component } from '@angular/core';

@Component({
  selector: 'app-componente01',
  standalone: true,
  imports: [],
  templateUrl: './componente01.component.html',
  styleUrl: './componente01.component.css'
})
export class Componente01Component {
  // Variáveis
  nome:string = 'Leon';
  idade:number = 27;

  fazerAlgo(){
    alert('Você clicou aqui');
  }
}
