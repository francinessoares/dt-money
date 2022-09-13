import { useState } from 'react'
import Modal from 'react-modal'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

export function Header() {
    const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false)

    function handleOpenNewTransactionsModal() {
        setIsNewTransactionsModalOpen(true);
    }

    function handleCloseNewTransactionsModal() {
        setIsNewTransactionsModalOpen(false);
    }

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={handleOpenNewTransactionsModal}>
                    Nova Transação
                </button>

                <Modal isOpen={isNewTransactionsModalOpen}>
                    <h2>Cadastrar transação</h2>
                </Modal>
            </Content>           
        </Container>
    )
}   