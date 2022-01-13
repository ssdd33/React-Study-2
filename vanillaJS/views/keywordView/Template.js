export class Template {
  getEmptyMessage() {
    return "추천 검색어가 없습니다.";
  }

  getList(data = []) {
    return `<ul class='list>${data.map(this._getItem).join("")}</ul>`;
  }

  _getItem({ id, keyword }) {
    return `<li data-keyword="${keyword}"><span class="number">${id}</span></li>`;
  }
}
