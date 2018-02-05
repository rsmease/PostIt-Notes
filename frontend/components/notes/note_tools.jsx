//utils
import React from 'react';
import Modal from 'react-modal';
import * as MaterialDesign from 'react-icons/lib/md';

//components
import NoteModalContainer from '../modals/note_modal_container';

class NoteTools extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editModalOpen: false,
            deleteModalOpen: false
        };
        this.openEditModal = this.openEditModal.bind(this);
        this.closeEditModal = this.closeEditModal.bind(this);

        this.openDeleteModal = this.openDeleteModal.bind(this);
        this.closeDeleteModal = this.closeDeleteModal.bind(this);
    }

    openEditModal() {
        this.setState({ editModalOpen: true });
    }
    closeEditModal() {
        this.setState({ editModalOpen: false });
    }

    //open and close for delete modal
    openDeleteModal() {
        this.setState({ deleteModalOpen: true });
    }
    closeDeleteModal() {
        this.setState({ deleteModalOpen: false });
    }

    render() {
        return (
            <div className='note-tools'>
                <MaterialDesign.MdCreate
                    className='note-tools-icon'
                    onClick={this.openEditModal} />
                <Modal
                    isOpen={this.state.editModalOpen}
                    onRequestClose={this.closeEditModal}
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
                        closeModal={this.closeEditModal}
                        note={this.props.note}
                        modalAction="edit"
                    />
                </Modal>
                <MaterialDesign.MdDelete
                    className='note-tools-icon'
                    onClick={this.openDeleteModal} />
                <Modal
                    isOpen={this.state.deleteModalOpen}
                    onRequestClose={this.closeDeleteModal}
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
                        closeModal={this.closeDeleteModal}
                        note={this.props.note}
                        modalAction="delete"
                    />
                </Modal>
            </div>
        );
    }
}

export default NoteTools;