import { storageService } from "../services/Storage";
import { STORAGE_KEYS } from "./storageKeys";

export const INITIAL_STATE = {
    tasks: {
        data: [],
        // data: storageService.getItem(STORAGE_KEYS.tasks),
    },

    modal: {
        template: null,
        data: {
            isOpen: false,
            title: "",
            btnSuccess: {
                caption: "Success",
            },
            btnReject: {
                caption: "Reject",
            },
            onSuccess: () => null,
            onReject: () => null,
        },
    },
}