function SecondaryButton({ children, className = '', ...props }) {
  return (
    <div
      className={`rounded-full bg-white/15 p-px transition duration-300 hover:scale-105 hover:bg-white/10 ${className}`}
    >
      <button
        className="cursor-pointer rounded-full bg-white/5 px-6 py-3 text-sm text-[#f6e8ff]"
        {...props}
      >
        {children}
      </button>
    </div>
  )
}

export default SecondaryButton
