import { Component } from '@angular/core';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.scss'],
})
export class TrailerComponent {
  trailerPlaying = true;
  isMuted = false;

  constructor() {}

  playOrStop(trailer: HTMLVideoElement) {
    if (this.trailerPlaying) {
      trailer.pause();
    } else {
      trailer.play();
    }

    this.trailerPlaying = !this.trailerPlaying;
  }

  muteOrVolUp(trailer: HTMLVideoElement) {
    if (this.isMuted) {
      trailer.muted = false;
    } else {
      trailer.muted = true;
    }

    this.isMuted = !this.isMuted;
  }
}
