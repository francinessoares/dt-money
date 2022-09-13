
import { useState } from 'react'
import { Dashboard } from "./Components/Dashboard";
import { Header } from "./Components/Header";
import { NewTransactionModal } from './Components/NewTransactionModal';
import { GlobalStyle } from "./styles/global";

function App() {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false)

  function handleOpenNewTransactionsModal() {
      setIsNewTransactionsModalOpen(true);
  }

  function handleCloseNewTransactionsModal() {
      setIsNewTransactionsModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionsModal={handleOpenNewTransactionsModal} />

      <NewTransactionModal
      isOpen={isNewTransactionsModalOpen}
      onRequestClose={handleCloseNewTransactionsModal }
      ></NewTransactionModal>

      <Dashboard />
      <GlobalStyle />
    </>
  );
}

export default App;
