const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t py-12 h-32">
      <div className="max-w-5xl mx-auto flex justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="/myface.jpg"
            alt="Ekansh Srivastava"
            className="w-12"
          />
          <div className="uppercase text-sm tracking-wider">Ekansh Srivastava</div>
        </div>
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()}{' '}
          <a href="/" className="hover:text-pink-600">
            BFOE
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
