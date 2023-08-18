export class ToDoStore {

    getItem(key) {
        return localStorage.getItem(key);
    }
}