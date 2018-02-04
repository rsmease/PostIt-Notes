import React from 'react';
import * as MaterialDesign from 'react-icons/lib/md';

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
                        <div className='note-tools'>
                            <MaterialDesign.MdCreate className='note-tools-icon' />
                            <MaterialDesign.MdDelete className='note-tools-icon' />
                        </div>
                    </div>
                </header>
                <section className='note-index-item-body'>
                    {this.props.note.body}
                </section>
            </div>
        );
    }
}

export default NoteIndexItem;