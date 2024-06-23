import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.css'
})
export class TextareaComponent {
  @Input() id: string = "";
  @Input() name: string = "";
  @Input() rows: string = "";
  @Input() cols: string = "";
  @Input() placeholder: string = "";
}
