//utils
import React from 'react';
import * as MaterialDesign from 'react-icons/lib/md';

//components
import NoteTools from './note_tools';

class NoteIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='note-index-item-container'>
                <header className={`note-index-item-header note-${this.props.note.color}`}>
                    <div className='note-index-item-header-elements'>
                        <span className='note-title'>{this.props.note.title}</span>
                        <NoteTools note={this.props.note} />
                    </div>
                </header>
                <div className='note-index-item-body'>
                    {this.props.note.body}
                </div>
            </div>
        );
    }
}

export default NoteIndexItem;