import * as React from 'react';
import { ICustomTilesProps } from './ICustomTilesProps';
import Swiper from 'swiper';
var mySwiper = new Swiper('.swiper-container', {
  direction: "horizontal",
  loop: false,
  pagination: {
    el: ".swiper-pagination"
  },
  navigation: {
    nextEl: "swiper-button-next",
    prevEl: "swiper-button-prev"
  }

});

export default class CustomTiles extends React.Component<ICustomTilesProps, {}> {
  public render(): React.ReactElement<ICustomTilesProps> {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">

          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
        </div>

        <div className="swiper-pagination"></div>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>

      </div>
    );
  }
}
