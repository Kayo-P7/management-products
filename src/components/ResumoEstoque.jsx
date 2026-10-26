function ResumoEstoque(props) {
    return (
        <div>



            <p>Produtos: {props.produtos}
                 Unidade: {props.unidades}
                 Estoque Baixo: {props.estoqueBaixo}
            </p>

        </div>
    )
}

export default ResumoEstoque;