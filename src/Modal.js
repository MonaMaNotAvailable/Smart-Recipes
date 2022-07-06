import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
    //want is to be triple equal === exact the same thing in every render
    //elRef is a frozen object that can only sets current, keep referential equality
    const elRef = useRef(null);
    // const x = {}
    // const y = {}
    // const z = x
    // x !== y;
    // z === x;

    if (!elRef.current){
        elRef.current = document.createElement("div");
    }

    useEffect(() => {
        const modalRoot = document.getElementById("modal");
        modalRoot.appendChild(elRef.current);

        //clean-up function
        //romeves the final div from container
        return () => modalRoot.removeChild(elRef.current);
    }, []);

    return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;