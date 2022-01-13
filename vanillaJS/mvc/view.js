import { emit, on } from "../helper";

export class View {
  constructor(element) {
    this.element = element;
    this.originalDisplay = this.element.style.display || "";
  }

  hide() {
    this.element.style.display = "none";
  }
  show() {
    this.element.style.display = this.originalDisplay;
  }
  on(eventName, handler) {
    on(this.element, eventName, handler);
  }
  emit(eventName, data) {
    emit(this.element, eventName, data);
  }
}
