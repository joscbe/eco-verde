import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-elementor',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './elementor.component.html',
  styleUrl: './elementor.component.css'
})
export class ElementorComponent {
  @Input('image') image: string = ""
  @Input('title') title: string = ""
  @Input('text') text: string = ""
}
