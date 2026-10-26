
function ProdutosEmEstoque(props){

    return(
        <div>
            <div>

                <h1 key={"id"}> {props.nome}</h1>
                <p key={"id"}> Estoque: {props.estoque} unidades </p>
                <button onClick={props.onAumentar}>+</button>
                <button onClick={props.onDiminuir}>-</button>
            </div>
        </div>
    )
}

export default ProdutosEmEstoque;
