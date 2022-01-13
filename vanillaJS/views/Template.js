import { TabLabel } from "../types";

export class Template {
  getEmptyMessage() {
    return "검색 결과가 없습니다.";
  }

  getList(data = []) {
    return `<ul class="result">${data.map(this._getItem).join("")}</ul>`;
  }
  _getItem({ name, imageUrl }) {
    return `<li><img src="${imageUrl}"/><p>${name}</p></li>`;
  }

  _getTab({ key, label }) {
    return `<li data-tab="${key}">${label}</li>`;
  }

  getTabList() {
    return `<ul class="tabs>${Object.values(tab)
      .map((key) => ({ key, label: TabLabel[key] }))
      .map(this._getTab)
      .join("")}</ul>`;
  }
}
