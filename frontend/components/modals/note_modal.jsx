import React from 'react';

class NoteModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.note ? this.props.note.id : undefined,
            color: this.props.note ? this.props.note.color : 'green',
            title: this.props.note ? this.props.note.title : '',
            body: this.props.note ? this.props.note.body : '',
            validGroup: this.props.note ? true : false,
            placeholderTitleVal: this.props.note ? '' : 'Untitled',
            placeholderBodyVal: this.props.note ? '' : 'Just start typing here'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClickOff = this.handleClickOff.bind(this);
        this.removePlaceholderTitleVal = this.removePlaceholderTitleVal.bind(this);
        this.removePlaceholderBodyVal = this.removePlaceholderBodyVal.bind(this);
        this.replacePlaceholderTitleVal = this.replacePlaceholderTitleVal.bind(this);
        this.replacePlaceholderBodyVal = this.replacePlaceholderBodyVal.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.modalSubmitAction();
    }

    handleClickOff(e) {
        if (e.target.className === "root-modal-container" ||
            e.target.className === "modal-cancel" ||
            e.target.className === "modal-delete-cancel") {
            e.preventDefault();
            this.props.closeModal();
        }
    }

    handleKeyUp(e) {
        if (this.state.title.length && this.state.body.length) {
            this.setState({ validGroup: true });
        } else if (!(this.state.title.length && this.state.body.length)) {
            this.setState({ validGroup: false });
        }
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleColorChange(e) {
        this.setState({ color: e.target.value });
    }

    removePlaceholderTitleVal() {
        this.setState({ placeholderTitleVal: '' });
    }

    removePlaceholderBodyVal() {
        this.setState({ placeholderBodyVal: '' });
    }

    replacePlaceholderTitleVal() {
        if (!this.state.title.length) {
            this.setState({ placeholderTitleVal: 'Untitled' });
        }
    }

    replacePlaceholderBodyVal() {
        if (!this.state.body.length) {
            this.setState({ placeholderBodyVal: 'Just start typing here' });
        }
    }

    modalSubmitAction() {
        switch (this.props.modalAction) {
            case "new":
                this.props.createNewNote(this.state).then(this.props.closeModal);
                break;
            case "edit":
                this.props.requestUpdateToNote(this.state).then(this.props.closeModal);
                break;
            case "delete":
                this.props.requestToDeleteNote(this.state.id).then(this.props.closeModal);
                break;
            default:
                console.log("Modal Action not set properly");
                break;
        }
    }

    showSubmitAction() {
        switch (this.props.modalAction) {
            case 'new':
                return 'Add';
            case 'edit':
                return 'Save';
            case 'delete':
                return 'Delete';
        }
    }

    showForm() {
        switch (this.props.modalAction) {
            case "delete":
                return (
                    <form className='modal-form-cancel'>
                        <h1 className='delete-title'>Delete Note</h1>
                        <div className='delete-body'>Are you sure you want to delete this note?</div>
                        <section className="modal-submit-options">
                            <button className="modal-cancel"
                                onClick={this.handleClickOff}>
                                <span className='modal-button-text'>Cancel</span></button>
                            <button className="modal-form-submit-valid"
                                onClick={this.handleSubmit}>
                                <span className='modal-button-text'>
                                    {this.showSubmitAction()}
                                </span>
                            </button>
                        </section>
                    </form>
                );
            default:
                return (
                    <form className='modal-form'>
                        <header className={`modal-form-header note-${this.state.color} big-border`}></header>
                        <section className='modal-form-input-container'>
                            <div className='modal-color-options'>
                                <label className='selector-pink'>
                                    <input type='radio'
                                        value='pink'
                                        checked={this.state.color === 'pink'}
                                        onChange={this.handleColorChange}
                                    />
                                </label>
                                <label className='selector-green'>
                                    <input type='radio'
                                        value='green'
                                        checked={this.state.color === 'green'}
                                        onChange={this.handleColorChange}
                                    />
                                </label>
                                <label className='selector-yellow'>
                                    <input type='radio'
                                        value='yellow'
                                        checked={this.state.color === 'yellow'}
                                        onChange={this.handleColorChange}
                                    />
                                </label>
                                <label className='selector-blue'>
                                    <input type='radio'
                                        value='blue'
                                        checked={this.state.color === 'blue'}
                                        onChange={this.handleColorChange}
                                    />
                                </label>

                            </div>
                            <input type="text"
                                className='title-input'
                                onKeyUp={(e) => this.handleKeyUp(e)}
                                value={this.state.title}
                                onFocus={this.removePlaceholderTitleVal}
                                onBlur={this.replacePlaceholderTitleVal}
                                placeholder={this.state.placeholderTitleVal}
                                onChange={this.handleInput('title')} />
                            <textarea
                                className='body-input'
                                onKeyUp={(e) => this.handleKeyUp(e)}
                                type="textarea"
                                value={this.state.body}
                                onFocus={this.removePlaceholderBodyVal}
                                onBlur={this.replacePlaceholderBodyVal}
                                placeholder={this.state.placeholderBodyVal}
                                onChange={this.handleInput('body')}
                            />
                        </section>
                        <section className="modal-submit-options">
                            <button className="modal-cancel"
                                onClick={this.handleClickOff}>
                                <span className='modal-button-text'>Cancel</span></button>
                            <button className={
                                this.state.validGroup ? "modal-form-submit-valid" :
                                    "modal-form-submit"}
                                onClick={this.handleSubmit}>
                                <span className='modal-button-text'>
                                    {this.showSubmitAction()}
                                </span>
                            </button>
                        </section>
                    </form>
                );
        }
    }

    render() {
        return (
            <div className='root-modal-container'
                onClick={this.handleClickOff}>
                <section className='modal-form-container'>
                    {this.showForm()}
                </section>
            </div>
        );
    }
}

export default NoteModal;