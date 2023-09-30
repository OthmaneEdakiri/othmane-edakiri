import "./Btn.css"

const Btn = (props) => {
    return (
        <>
            <a className={`btn ${props.info.classN}`} target={props.info.target} href={props.info.url}>{props.info.title}</a>
        </>
    )
}

export default Btn
