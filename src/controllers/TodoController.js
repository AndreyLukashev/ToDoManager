import { MODAL_TEMPLATES } from "../constants/modalTemplates";

export class TodoController {
    constructor(models, view) {
      this.view = view;
      this.todoModel = models.todoModel; 
      this.modalModel = models.modalModel;

      this.openCreateTaskModel();
    }
    openCreateTaskModel() {
        this.view.openCreateTaskModel(() => {
            console.log('click')
            this.modalModel.open(MODAL_TEMPLATES.todoFormTemplate, {
                isOpen: true,
                title: 'Create Task',
                btnSuccess: {
                    caption: 'Create',
                },
                btnReject: {
                    caption: "Cancel",
                },
                onSuccess: (modelEl) => {
                  const formData = new FormData(
                    modelEl.querySelector("create-task-modal")
                    );
                    this.todoModel.create(extractFormData(formData));
                },
                onReject: () => {
                    console.log("reject");
                    this.modalModel.close();
                },
            });

        });
    }
}

