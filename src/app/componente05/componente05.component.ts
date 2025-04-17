import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente05',
  imports: [CommonModule], // Acesso a diretiva ngFor
  templateUrl: './componente05.component.html',
  styleUrl: './componente05.component.css'
})
export class Componente05Component {

  // Vetor de nomes
  nomes: string[] = ["Leon", "Bruno", "Caio", "Denis"];
}
