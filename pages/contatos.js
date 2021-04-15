function Contato(props) {
    return(
        <div>
            <h1>Informações de contato</h1>
            <hr />
            <h2>Almir</h2>
            <h3>Telefone para contato: {props.telefone}</h3>
            <hr />
            <a href="/">Voltar para Home page</a>
        </div>
    )
}

export function getStaticProps(){
    const telefone = '+55 (11) 98695-6685'
    
    return{
        props: {
            telefone
        },
        revalidate: 5
    }
}

export default Contato