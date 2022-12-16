import "./RedesSociais.css"

const RedesSociais = () => {

    const listaRedesSociais = [
        {id: 1, nomeRede: 'Instagram', linkRede: 'http://instagram.com/pedropaulodfr', color: '#DD247B'},
        {id: 2, nomeRede: 'GitHub', linkRede: 'http://github.com/pedropaulodfr', color: '#0D1117'},
        {id: 3, nomeRede: 'Linkedin', linkRede: 'http://linkedin.com/in/pedropaulodfr', color: '#0E76A8'},
        {id: 4, nomeRede: 'Telegram', linkRede: 'http://t.me/pedropaulodfr', color: '#0088CC'}
    ]

    const linkRedesSociais = listaRedesSociais.map((props) =>
        <div key={props.id} className="links_content">
            <a href={props.linkRede} style={{backgroundColor: props.color}}>{props.nomeRede}</a>
        </div>
    )

    return (
        <>
            {linkRedesSociais}
        </>
    )

}

export default RedesSociais