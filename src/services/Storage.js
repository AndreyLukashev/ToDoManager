class Storage {
    constructor() {
        this.storage = window.localStorage;
    }

    setItem(key, value) {
        try{
            this.storage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(error);
        }
        
    }

    getItem(key) {
        try {
            this.storage.removeItem(key);
        } catch (error) {
            console.error(error);
        }
        
    }

    clear() {
        this.storage.clear();
    }
}

export const storageService = new Storage();