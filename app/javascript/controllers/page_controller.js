import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = ["mapillus", "mapdev", "textillus", "textdev", "mapwelcome", "illuMenu", "DevMenu"]

  switchdev() {
    this.mapdevTarget.style.zIndex = 4;
    this.mapdevTarget.classList.add("animate__slideInRight");
    this.mapillusTarget.classList.remove("animate__slideInLeft");
    this.textdevTarget.classList.remove("animate__fadeOut");

    this.illuMenuTarget.classList.remove("animate__slideInLeft");
    this.illuMenuTarget.classList.add("animate__fadeOut","animate__faster");
    this.illuMenuTarget.classList.remove("animate__fadeIn", "animate__delay-1s");
    this.textillusTarget.classList.add("animate__fadeOut");
    this.mapillusTarget.style.zIndex = 2;
    this.mapwelcomeTarget.classList.add("animate__fadeOut", "animate__delay-1s","animate__faster");
    this.DevMenuTarget.classList.add("animate__fadeIn", "animate__delay-1s","animate__faster");
    this.DevMenuTarget.classList.remove("animate__fadeOut");
    this.DevMenuTarget.style.display = "block";
  }


  switchillus() {

    this.mapillusTarget.style.zIndex = 4;
    this.illuMenuTarget.classList.add("animate__fadeIn", "animate__delay-1s","animate__faster");
    this.illuMenuTarget.classList.remove("animate__fadeOut");
    this.illuMenuTarget.style.display = "block";
    this.mapillusTarget.classList.add("animate__slideInLeft");
    this.textdevTarget.classList.add("animate__fadeOut");
    this.textillusTarget.classList.remove("animate__fadeOut");
    this.mapdevTarget.classList.remove("animate__slideInRight");
    this.mapdevTarget.style.zIndex = 2;
    this.mapwelcomeTarget.classList.add("animate__fadeOut", "animate__delay-1s","animate__faster");
    this.DevMenuTarget.classList.remove("animate__slideInLeft");
    this.DevMenuTarget.classList.add("animate__fadeOut","animate__faster");
    this.DevMenuTarget.classList.remove("animate__fadeIn", "animate__delay-1s");

  }


}
