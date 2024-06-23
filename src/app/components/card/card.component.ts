import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FontAwesomeModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input('src-img') srcImage: string = "";
  @Input('title') title: string = "";
  @Input('text') text: string = "";

  faArrowRight = faArrowRight;
}
