import outsideClick from "./outsideclick.js";

export default class Dropdown {
  constructor(menus, events) {
    this.dropdownMenus = document.querySelectorAll(menus);

    // define touchstart e click como argumento
    // padrão de events caso o usuário
    // não defina
    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }
    this.activeClass = 'active';
    this.activeDropdown = this.activeDropdown.bind(this);
  }

  // ativa o dropdown menu e adiciona
  // a função que observa o clique fora dele
  activeDropdown(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.toggle(this.activeClass);
    outsideClick(element, this.events, () => {
      this.classList.remove("active");
    });
  }

  // adiciona os eventos ao dropdown menu
  addDropdownEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdown);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownEvent();
    }
    return this;
  }
}
