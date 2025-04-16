import { Component } from '@angular/core';

@Component({
  selector: 'app-componente02',
  imports: [],
  templateUrl: './componente02.component.html',
  styleUrl: './componente02.component.css'
})
export class Componente02Component {
  // Função para exibir uma mensagem
  // Eventos

  //Click
  mensagem(){
    alert('Hello world!');
  }

  //Input
  texto = '';
  atualizarTexto(event:any){
    this.texto = event.target.value;
  }

  //Change
  opcao = '';
  selecionar(event:any){
    this.opcao = event.target.value;
  }

  //Submit
  enviarFormulario(event:any){
    event.preventDefault();
    alert('Formulário enviado!');
    
  }
}
