export default class TaskAddingForm{
    constructor(container){
        console.log(container);
        this.showForm(container);
    }
    createInput(){
        let input = document.createElement("input");
        input.classList.add("form-control");
        input.placeholder = "Enter new task";
        return input;
    }
    createForm(){
        let form = document.createElement("form");
        form.classList.add("input-group", "mb-3");
        return form;
    }
    createButton(){
        let button = document.createElement("button");
        button.classList.add("btn", "btn-primary");
        button.textContent = "Add task";
        return button;
    }    
    createWrapper(){
        let wrapper = document.createElement("div");        
        wrapper.classList.add("input-group-append");
        return wrapper;
    }
    assemblyForm(){
        let button = this.createButton();
        let input = this.createInput();
        
        let wrapper = this.createWrapper();
        wrapper.append(button);        
        let form = this.createForm();
        form.append(input);
        form.append(wrapper);
        return {
            form,
            input,
            button
        }
    }
    /**
     * 
     * @param {Element} container 
     */
    showForm(container){        
        console.log(container);
        let form = this.assemblyForm().form;        
        container.append(form);
    }
}