import React from 'react';
import * as MaterialDesign from 'react-icons/lib/md';

class HeaderAddNote extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className='header-add-note'>
                <div className='placeholder-logo'></div>
                <button className='button-add-note'>
                    <MaterialDesign.MdAdd className='button-add-note-icon' />
                    Add Note
                </button>
            </header >
        );
    }
}

export default HeaderAddNote;