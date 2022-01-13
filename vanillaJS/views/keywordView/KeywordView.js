import { qs } from "../../helper";
import { View } from "../../mvc/view";
import { delegate } from "../../utils";
import { Template } from "./Template";

export class KeywordView extends View {
  constructor(element = qs("#keyword-view"), template = new Template()) {
    super(element);
    this.template = template;
    this.bindEvents();
  }

  show(data = []) {
    this.element.innerHTML =
      data.length > 0 ? this.template.getList(data) : this.getEmptyMessage();
    super.show();
  }

  bindEvents() {
    delegate(this.element, "click", "li", (event) => this.handleClick(event));
  }
  handleClick(event) {
    const { keyword } = event.target.dataset;
    this.emit("@click", { value: keyword });
  }
}
