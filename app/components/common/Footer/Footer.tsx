const Footer = () => {
  return (
    <footer className="w-full border-t bg-white py-4">
      <div className="container mx-auto px-4 text-center text-secondary">
        <p>© {new Date().getFullYear()} Find Jobs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
