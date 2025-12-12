const FooterContent = () => {
  return (
    <div className="w-full mt-8 bg-linear-to-r from-blue-500 to-blue-400 px-4 py-6">
      <div className="text-white">
        <h1 className="text-2xl font-bold">PesanKami</h1>
        <p className="mt-2 text-sm">
          Platform e-commerce terpercaya untuk semua kebutuhan belanja online
          Anda.
        </p>
      </div>
      <div className="mt-10 text-white">
        <h1 className="text-lg font-bold">Hubungi Kami</h1>
        <div className="text-sm mt-2 flex flex-col gap-1">
          <p>ferdiapriansyah99@gmail.com</p>
          <p>+62 822 5808 9236</p>
          <p>Kota Tangerang, Banten</p>
        </div>
      </div>
      <hr className="mt-6 w-full text-white/30" />
      <h3 className="text-center text-white text-xs mt-4">© 2025 PesanKami. All rights reserved.</h3>
    </div>
  );
};

export default FooterContent;
