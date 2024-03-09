import { View } from './View';

export class TodoView extends View {

  openCreateTaskModel(callback) {
    this.el.addEventListener('click', (evt) => {
     if(evt.target.closest('.open-create-task-model')) {
      callback();
     }
    });
  }

    render({todoModel}) {
        const{data} = todoModel;
        return `
        <div class="mt-16">
          <div class="flex justify-between items-center">
            <p class="text-sky-500">Total Tasks ${data.length}</p>
            <button class="bg-sky-500 p-2 text-white rounded open-create-task-model">Create Task</button>
          </div>

          <div class="mt-5 flex flex-col gap-6">
            <div class="rounded bg-slate-700 p-2 border-slate-500">
              <div class="flex justify-between items-center">
                <div class="flex gap-2">
                  <input type = "checkbox" />
                  <h3 class="text-lg text-white line-clamp-2">Title</h3>
                </div>
                
                <div class="flex gap-2">
                  <button class="bg-sky-500 px-2 rounded text-white">Edit</button>
                  <button class="bg-red-500 px-2 rounded text-white">Delete</button>
                </div>
              </div>
              <p class="text-sm text-white line-clamp-2">Lorem ipsum</p>
            </div>
          </div>

        </div>
        `
    }
}