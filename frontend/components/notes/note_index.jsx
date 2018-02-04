//utils
import React from 'react';

//components
import NoteIndexItem from './note_index_item';

class NoteIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestAllNotes();
    }

    showNotes() {
        if (this.props.notes.length) {
            return this.props.notes.map(note => (
                <NoteIndexItem note={note} />
            ));
        }
    }

    render() {
        return (
            <section className='note-index-container'>
                <div className='notes-index-container-elements'>
                    {this.showNotes()}
                </div>
            </section>
        );
    }
}

export default NoteIndex;

