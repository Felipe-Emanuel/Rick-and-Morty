import './styles.css';

export function Container({children, className}: any) {
  return (
    <section className={className ? className : 'container'}>{children}</section>
  )
}
