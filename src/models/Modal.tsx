import { forwardRef } from "react";

type Props = {
    children : React.ReactNode,
    toggleDialog : () => void;
}

const Modal = forwardRef<HTMLDialogElement, Props>(({children, toggleDialog }, ref) => {
    return (
        <dialog ref={ref} onClick={(e)=> {
            if(e.currentTarget === e.target){
                toggleDialog();
            }
        }}>
           <div className="dialog-btn-container">
           <button className="dialog-btn" onClick={toggleDialog}>X</button>
            </div> 
            {children}
        </dialog>
    )
})

export default Modal;