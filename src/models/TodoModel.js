import { STORAGE_KEYS } from '../constants/storageKeys';
import { storageService } from '../services/Storage';
import { Model } from './Model'; 

export class TodoModel extends Model {

    getAllItems() {
        return storageService.getItem(STORAGE_KEYS.tasks) ?? [];
    }

    setItems(data) {
        storageService.setItem(STORAGE_KEYS.tasks, data);
        return this.getAllItems();
    }



    initTasks(tasks) {
        this.setState({...this.state, data: tasks});
    }

    create(data) {
        this.setState({
            ...this.state,
            data: this.setItems(
                this.getAllItems().concat({
                    ...data,
                    id: this. state.data.length + 1,
                    createdAt: new Date(),
                    isCompleted: false,
                     
                }),
            )
        });
    }

    delete(id) {
        const items = this.getAllItems().filter((item) => item.id !== id);
        this.setState({...this.state, data: this.setItems(items)});
    }
}