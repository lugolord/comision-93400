function Button ({ label, styles, onClick }) {
  return (
    <button className={styles} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
