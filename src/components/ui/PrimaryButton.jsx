function PrimaryButton({ children, className = '', ...props }) {
  return (
    <button
      className={`group inline-flex cursor-pointer items-center justify-center rounded-full bg-[#ff58ff] px-6 py-3 text-sm font-medium text-[#22052b] transition hover:bg-[#ff79ff] ${className}`}
      {...props}
    >
      <span className="relative overflow-hidden">
        <span className="block transition-transform duration-200 group-hover:-translate-y-full">
          {children}
        </span>
        <span className="absolute top-0 left-0 block translate-y-full transition-transform duration-200 group-hover:translate-y-0">
          {children}
        </span>
      </span>
    </button>
  )
}

export default PrimaryButton
