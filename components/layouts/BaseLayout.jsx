import Header from '../shared/Header'

const BaseLayout = (props) => {
  const { className, children } = props

  console.info('className', className)

  return (
    <div className="layout-container">
      <Header />
      <main className={`cover ${className}`}>
        <div className="wrapper">{children}</div>
      </main>
    </div>
  )
}

export default BaseLayout
