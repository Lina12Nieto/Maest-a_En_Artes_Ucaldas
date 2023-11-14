import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  slideIndex: number = 0;

  ngOnInit() {
    this.showSlides(this.slideIndex);
  }

  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  showSlides(n: number) {
    const slides = document.getElementsByClassName("slide");
    if (n >= slides.length) {
      this.slideIndex = 0;
    }
    if (n < 0) {
      this.slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active');
    }
    slides[this.slideIndex].classList.add('active');
  }

  onPrevClick() {
    this.plusSlides(-1);
  }

  onNextClick() {
    this.plusSlides(1);
  }

}
