window.addEventListener("DOMContentLoaded", function () {

  function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
      console.log(`hello ${this.name}`);
    };
  }


  let inputAge = document.getElementById('age');

  inputAge.addEventListener("input", function () {
    inputAge.value = inputAge.value.replace(/[^0-9+]/, '');
  });

  inputAge.addEventListener("blur", function () {
    showUser.call(this, "efimova", "tatiana");
  });

  function showUser(surname, name) {
    alert("Пользователь " + surname + " " + name + ", её возраст " +
      this.value);
  }

});