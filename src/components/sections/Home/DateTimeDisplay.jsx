export function DateTimeDisplay({ value, type }) {
  return (
    <div className="countdown d-flex flex-column align-items-center" style={{ padding: '0 0.25rem 0 0.25rem', lineHeight: '1rem' }}>
      <div className="m-0">{value}</div>
      <span className="small-font text-uppercase">{type}</span>
    </div>
  )
}
