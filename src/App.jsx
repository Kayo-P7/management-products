import './App.css'
import Cabecalho from "./components/Cabecalho.jsx";
import ResumoEstoque from "./components/ResumoEstoque.jsx";
import ProdutosEmEstoque from "./components/ProdutosEmEstoque.jsx";

import {useState} from "react";

function App() {

    const [produtos, setProdutos] = useState([
        {id: 1, nome: "Teclado", estoque: 10},
        {id: 2, nome: "Mouse", estoque: 5},
        {id: 3, nome: "Monitor", estoque: 2},
        {id: 4, nome: "Headset", estoque: 15}
    ]);

    function aumentarEstoque(id) {
        setProdutos((produtosAtuais) =>
            produtosAtuais.map((produto) => {
                if (produto.id === id) {
                    return {
                        ...produto,
                        estoque: produto.estoque + 1
                    }
                }else{
                    return produto
                }
            })
        )

    }

    function diminuirEstoque(id){
        setProdutos((produtosAtuais) =>
            produtosAtuais.map((produtos) =>{
                if(produtos.id === id){
                return{
                    ...produtos,
                    estoque: produtos.estoque - 1
                }}else{
                    return produtos
                }
        }
        )
        )

    }
    const totalProdutos = produtos.reduce((acumulador, produto) => {

        return acumulador + produto.estoque
    }, 0)
    const quantidade = produtos.length
    const estoqueMenorQ = produtos.filter((p) => p.estoque < 15).length;


    return (
        <div className="app">
            <Cabecalho/>
            <ResumoEstoque produtos={quantidade} unidades={totalProdutos} estoqueBaixo={estoqueMenorQ}/>


            <section>
                <h1>Produtos em estoque</h1>
                {produtos.map((produto) => {
                    return <ProdutosEmEstoque
                        key={produto.id}
                        nome={produto.nome}
                        estoque={produto.estoque}
                        onAumentar={() => {
                            aumentarEstoque(produto.id)
                        }}
                        onDiminuir={() => {diminuirEstoque(produto.id)}}
                    />
                })}


            </section>


        </div>
    )
}

export default App
