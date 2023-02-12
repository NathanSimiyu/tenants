import { Component } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent {
  slideshowImages = [
    'path/ro/image1.jpg',
    'path/ro/image1.jpg',
    'path/ro/image1.jpg',
    'path/ro/image1.jpg',
    'path/ro/image1.jpg',
    'path/ro/image1.jpg',
  ];
  currentIndex = 0;

}
