import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { ElementorComponent } from '../elementor/elementor.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { InputComponent } from '../input/input.component';
import { TextareaComponent } from '../textarea/textarea.component';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FontAwesomeModule,
    HeaderComponent,
    CardComponent,
    ElementorComponent,
    InputComponent,
    TextareaComponent,
    BtnPrimaryComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faLocationDot = faLocationDot;
}
