import qrPayment from "../../assets/images/qr-payment.jpeg";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "../../context/cartContext";
import { useProducts } from "../../hooks/useProducts";
import { usePayment } from "../../context/paymentContext";
import { useModal } from "../../context/modalContext";

const PaymentCard = () => {
  const { addCart, setAddCart } = useCart();
  const { products } = useProducts();
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalProduct, setTotalProduct] = useState(0);
  const { showPayment, setShowPayment } = usePayment();
  const [paymentProof, setPaymentProof] = useState(null);
  const [paymentProofPreview, setPaymentProofPreview] = useState(null);
  const { setShowModal } = useModal();
  const USD_TO_IDR = 16000;

  // Function summary
  useEffect(() => {
    const sum = addCart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTotalProduct(sum);
  }, [addCart]);

  useEffect(() => {
    const sum = addCart.reduce((acc, item) => {
      const product = products.find((product) => product.id === item.id);
      return acc + product.price * item.qty;
    }, 0);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTotalPrice(sum);
  }, [addCart, products]);

  // Function handle upload proof of payment
  function handlePaymentProofUpload(e) {
    const file = e.target.files[0];
    if (file) {
      setPaymentProof(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPaymentProofPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  // Function if payment success
  function handlePaymentSuccess() {
    if (!paymentProof) {
      alert("Silakan upload bukti pembayaran terlebih dahulu!");
      return;
    }
    setAddCart([]);
    setPaymentProof(null);
    setShowPayment(false);
    setPaymentProofPreview(null);
    setShowModal(true);
  }

  return (
    <div className={`${showPayment ? "block" : "hidden"}`}>
      {/* Backdrop */}
      <div
        onClick={() => setShowPayment(false)}
        className={`fixed inset-0 z-80 h-screen w-full bg-black/50 transition-all duration-300 ease-in-out`}
      ></div>

      <div className="hide-scrollbar fixed top-3 left-1/2 z-9999 max-h-[95vh] w-[80%] -translate-x-1/2 overflow-y-auto rounded-lg bg-white px-4 pt-5 text-center">
        {/* Payment Header */}
        <div>
          <h1 className="text-xl font-bold">Pembayaran</h1>
          <p className="mt-2 text-sm text-slate-700">
            Scan QR Code untuk membayar
          </p>
        </div>
        <button
          onClick={() => setShowPayment(false)}
          className="absolute top-3 right-3 text-slate-400"
        >
          <X />
        </button>

        {/* Payment Body */}
        <div className="mt-6 w-full rounded-lg border-2 border-blue-600 p-4">
          <img src={qrPayment} alt="payment-img" />
        </div>
        <div className="mt-4 w-full rounded-lg bg-blue-100/50">
          <div className="flex justify-between p-3 text-left text-sm">
            <div>
              <h1>Total Belanja:</h1>
              <h1>Jumlah Item:</h1>
            </div>
            <div className="text-right font-bold">
              <h1>Rp {(totalPrice * USD_TO_IDR).toLocaleString("id-ID")}</h1>
              <h1>{totalProduct} Item</h1>
            </div>
          </div>
          <div className="mx-auto w-[90%] border-t border-blue-600/40"></div>
          <div className="mt-3 flex items-center justify-between px-3 pb-4 text-base font-bold">
            <h1>Total Bayar:</h1>
            <h1 className="text-blue-600">
              {" "}
              Rp {(totalPrice * USD_TO_IDR).toLocaleString("id-ID")}
            </h1>
          </div>
        </div>

        {/* Payment Footer */}
        <div className="mt-6 mb-4">
          <label className="mb-2 block text-left font-semibold text-gray-700">
            Upload Bukti Pembayaran <span className="text-red-500">*</span>
          </label>
          <div className="rounded-lg border-2 border-dashed border-gray-300 p-4 text-center transition hover:border-blue-400">
            {paymentProofPreview ? (
              <div className="relative">
                <img
                  src={paymentProofPreview}
                  alt="Bukti Pembayaran"
                  className="mx-auto max-h-48 rounded-lg"
                />
                <button
                  onClick={() => {
                    setPaymentProof(null);
                    setPaymentProofPreview(null);
                  }}
                  className="absolute top-2 right-2 rounded-full bg-red-500 p-1 text-white hover:bg-red-600"
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <label className="cursor-pointer">
                <div className="mb-2 text-gray-400">
                  <div className="mb-2 text-4xl">📷</div>
                  <p className="text-sm">Klik untuk upload bukti pembayaran</p>
                  <p className="mt-1 text-xs">
                    Format: JPG, PNG, JPEG (Max 5MB)
                  </p>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePaymentProofUpload}
                  className="hidden"
                />
              </label>
            )}
          </div>
        </div>
        <button
          onClick={handlePaymentSuccess}
          disabled={!paymentProof}
          className={`mb-6 w-full rounded-lg py-3 font-bold transition ${
            paymentProof
              ? "bg-green-600 text-white hover:bg-green-700"
              : "cursor-not-allowed bg-gray-300 text-gray-500"
          }`}
        >
          {paymentProof
            ? "Konfirmasi Pembayaran"
            : "Upload Bukti Pembayaran Dulu"}
        </button>
      </div>
    </div>
  );
};

export default PaymentCard;
