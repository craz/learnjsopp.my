export default class TodoApp {
  /**
   * С этим надо тоже что-то делать потому что так должно работать а не работает надо в чате вебпака спросить 
   * dbProvider = "localStorage";
   * 
  /**
   * fucntion construct main class todo application
   * @param {Element} container
   * @param {string} userName
   */
  constructor(container, userName) {
    console.log("start constructor");
    this.container = container;
    this.userName = userName;
    /** вот это надо бы переписать на гетаррах сеттерах, но надо у кого-то уточнять на форумах или в чатах */
    this.title = `${userName}'s TODO list`;
    this.showTitle(this.container);
    this.dbProvider = "localStorage";

    this.buildForm();

    this.getDbProvider(userName).then((result) => {
      console.log(result);
    });
  }
  /**
   * function show title in html
   * @param {Element} container
   */
  showTitle(container) {
    console.log("show title function");
    container.append(this.title);
  }
  buildForm() {
    import(/* webpackChunkName: "taskAddingForm" */ `./taskAddingForm`)
      .then((form) => {
        let f = new form.default(this.container);        
      })
      .catch((error) => {
        console.log("Not import form for application. " + error);
      });
  }
  async getDbProvider(key) {
    try {
      const dbProvider = await import(
        /* webpackChunkName: "localStorageProvider" */ `../dbProvider/${this.dbProvider}Provider`
      );
      return new dbProvider.default(key);
    } catch (error) {
      console.log("not loaded provider " + this.dbProvider + ", " + error);
    }
  }
}
