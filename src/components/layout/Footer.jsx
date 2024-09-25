const Footer = () => {
  return (
    <div className="bg-gray">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <p className="w-full py-6 flex items-center text-sm text-normal justify-center">
          © {new Date().getFullYear()} | coded with ❤️️ by Othmane
        </p>
      </div>
    </div>
  );
};

export default Footer;
