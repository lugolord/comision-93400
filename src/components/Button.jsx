function Button ({ label, styles, onClick, disabled }) {
  return (
    <button className={`${styles} ${disabled ? 'opacity-50' : ''}`} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  )
}

export default Button
