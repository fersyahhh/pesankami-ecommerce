import { useModal } from "../../context/modalContext";
import { Check } from "lucide-react";

const ModalPayment = () => {
  const { showModal, setShowModal } = useModal();

  return (
    <div
      className={`transition-all duration-500 ease-in-out ${showModal ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
    >
      {/* Backdrop */}
      <div
        onClick={() => setShowModal(false)}
        className={`fixed inset-0 z-80 h-screen w-full bg-black/50 transition-all duration-300 ease-in-out`}
      ></div>

      {/* Modal */}
      <div
        className={`fixed top-40 left-1/2 z-999 h-auto w-[80%] md:w-[60%] xl:w-[30%] xl:w -translate-x-1/2 rounded-xl bg-white px-5 pb-6 transition-all duration-500 ease-in-out ${showModal ? "translate-y-0" : "translate-y-4"}`}
      >
        <div className="mt-8 flex w-full justify-center">
          <div className="flex h-15 w-15 items-center justify-center rounded-full bg-green-200">
            <Check className="text-green-600" />
          </div>
        </div>
        <div className="mt-6 text-center">
          <h1 className="text-xl font-bold text-green-600">Berhasil!</h1>
          <p className="mt-3 text-sm text-slate-700">
            Pembayaran berhasil! Terima kasih atas pembelian Anda.
          </p>
        </div>
        <div className="w-full flex justify-center">
          <button
            onClick={() => setShowModal(false)}
            className="mt-6 w-full md:w-[95%] rounded-lg bg-green-600 py-2 font-bold text-white hover:bg-green-700"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalPayment;
