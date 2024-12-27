import { useRef } from "react";

const useDialogToggle = () => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const toggleDialog = () => {
        if (!dialogRef.current) {
            return;
        }

        dialogRef.current.hasAttribute("open")
            ? dialogRef.current.close()
            : dialogRef.current.showModal();
    };

    return { dialogRef, toggleDialog };
};

export default useDialogToggle;