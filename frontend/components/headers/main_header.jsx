//utils
import React from 'react';
import Modal from 'react-modal';
import * as MaterialDesign from 'react-icons/lib/md';

//components
import NoteModalContainer from '../modals/note_modal_container';

class MainHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalOpen: true });
    }
    closeModal() {
        this.setState({ modalOpen: false });
    }


    render() {
        return (
            <header className='main-header'>
                <section className='main-header-elements'>
                    <div className='placeholder-logo'></div>
                    <button className='add-note-button' onClick={this.openModal}>
                        <MaterialDesign.MdAdd className='add-note-button-icon' />
                        <Modal
                            isOpen={this.state.modalOpen}
                            onRequestClose={this.closeModal}
                            overlayClassName={
                                {
                                    base: "root-modal-container",
                                    afterOpen: "root-modal-container",
                                    beforeClose: "root-modal-container"
                                }
                            }
                            className={
                                {
                                    base: "override-content-default",
                                    afterOpen: "override-content-default",
                                    beforeClose: "override-content-default"
                                }
                            }>
                            <NoteModalContainer
                                closeModal={this.closeModal}
                                modalAction="new"
                            />
                        </Modal>
                        <span className="button-text">Add Note</span>
                    </button>
                </section>
            </header >
        );
    }
}

export default MainHeader;