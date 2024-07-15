import { Modal } from "bootstrap";
import { ReactNode, useEffect, useRef, useState } from "react"

const BsModal = ({ showModal, children }: { showModal: boolean, children: ReactNode }) => {
    const modalRef = useRef(null);
    const [showChild, setShowChild] = useState(false);

    useEffect(() => {
        const modal = Modal.getOrCreateInstance(modalRef.current!);
        if (showModal) {
            setShowChild(true);
            modal.show();
        }
        else {
            modal.hide();
            setShowChild(false);
        }
    }, [showModal])

    const styles = {
        modal_content: {
            maxHeight: "calc(100% - 4rem)",
            width: "100vh",
            top: "50%",
            transform: "translateY(-48%)",
        },
    }

    return (
        <div className="modal" ref={modalRef} data-bs-backdrop="static">
            <div className="modal-dialog modal-lg modal-dialog-scrollable">
                <div className="modal-content" style={styles.modal_content}>
                    {showChild && children}
                </div>
            </div>
        </div>
    )
}
export default BsModal;