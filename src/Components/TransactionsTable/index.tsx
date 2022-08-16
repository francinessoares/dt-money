import { Container } from "./style";

export function TransactionsTable() {
    return (
    <Container>
            <table>
                <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Preco</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="title">Desenvolvimento de website</td>
                        <td>R$12.000</td>
                        <td>Venda</td>
                        <td>12/04/2022</td>
                    </tr>      
                    <tr>
                        <td className="title">Hamburguer</td>
                        <td>-R$500,00</td>
                        <td>Alimentacao</td>
                        <td>01/09/2022</td>
                    </tr>
                    <tr>
                        <td className="title">Aluguel Apartamento</td>
                        <td>-R$2.000</td>
                        <td>Casa</td>
                        <td>12/05/2022</td>
                    </tr>
                    <tr>
                        <td className="title">Computador</td>
                        <td>R$1.000</td>
                        <td>Venda</td>
                        <td>02/04/2022</td>
                    </tr>          
                </tbody>
            </table>
        </Container>
    )
    
 }