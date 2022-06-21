export default function MessageContainer (props) {
  // eslint-disable-next-line react/prop-types
  const { chatText, fromMe = true } = props
  return (
        <>
            <div className={`d-flex ${fromMe ? 'justify-content-left' : 'justify-content-right'}`}>
                <span className={`msg-ui ${fromMe ? 'msg-from-me' : 'msg-from-other'}`}>{chatText}</span>
            </div>
        </>
  )
}
