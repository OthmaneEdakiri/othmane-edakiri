const Container = ({ className, children, ...props }) => {
  return (
    <section
      className={`w-full bg-gray py-16 md:py-20 2xl:py-24 ${className}`}
      {...props}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        {children}
      </div>
    </section>
  );
};


export default Container;
