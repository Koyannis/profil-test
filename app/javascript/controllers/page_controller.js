import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = ["mapillus", "mapdev"]

  switchdev() {

    this.mapillusTarget.style.zIndex = -1;
    this.mapdevTarget.classList.add("animate__slideInRight");
    this.mapillusTarget.classList.remove("animate__slideInLeft");
    this.mapdevTarget.classList.remove("animate__fadeOut");
    this.mapillusTarget.classList.add("animate__fadeOut");
    this.mapdevTarget.style.zIndex = 1;

  }


  switchillus() {
    this.mapdevTarget.style.zIndex = -1;
    this.mapillusTarget.classList.add("animate__slideInLeft");
    this.mapdevTarget.classList.add("animate__fadeOut");
    this.mapillusTarget.classList.remove("animate__fadeOut");
    this.mapdevTarget.classList.remove("animate__slideInRight");
    this.mapillusTarget.style.zIndex = 1;
  }


}
