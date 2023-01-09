import { useModal } from "./contexts/Modal";
import Modal from "./components/Modal";

function App() {
  const { modalIsOpen, setModalOpen } = useModal();
  return (
    <>
      <div className="wrapper">
        {modalIsOpen && <Modal modalIsOpen={modalIsOpen} />}
      </div>
    </>
  );
}

export default App;
