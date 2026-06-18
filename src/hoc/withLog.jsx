const withLog = (Component) => {
  function ComponentWithLog (props) {
    console.log('hola desde el hoc')

    return (
      <Component {...props} />
    )
  }

  return ComponentWithLog
}

export default withLog
