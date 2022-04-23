export default function Square({ black, children }) {
  const fill = black ? 'black' : 'white'
  const stroke = black ? 'white' : 'black'

  return (
    <div
      style={{
        backgroundColor: fill,
        color: stroke,
        // width: '100%',
        // height: '100%',
        width: '40px',
        height: '40px',
      }}
    >
      {children}
    </div>
  )
}