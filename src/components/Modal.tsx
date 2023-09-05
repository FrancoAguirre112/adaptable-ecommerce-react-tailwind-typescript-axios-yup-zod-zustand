import modalCloseIcon from "../assets/icons/menuClose.svg";
import Logo from "./Logo";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({
  open,
  onClose,
  children,
}: ModalProps) {
  const overlayOpacity = open ? "opacity-50" : "opacity-0 pointer-events-none";
  const modalPosition = open ? `left-0` : `-left-[200%]`;

  return (
    <div className="z-40 absolute">
      {/* Overlay */}
      <div
        className={`${overlayOpacity} fixed inset-0 bg-black`}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`transition-all duration-200 inset-0 fixed ${modalPosition} bg-white max-w-screen-sm`}
      >
        <div className="grid grid-cols-[16%_68%_16%] py-7 px-2 justify-center place-items-center border-b-[1px]">
          <div className="w-full" />
          <div onClick={onClose}>
            <Logo />
          </div>
          <button onClick={onClose}>
            <img src={modalCloseIcon} alt="close popup" />
          </button>
        </div>
        <div className="p-4" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
