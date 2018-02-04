import React from 'react';
import * as MaterialDesign from 'react-icons/lib/md';

class MainHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className='main-header'>
                <section className='main-header-elements'>
                    <div className='placeholder-logo'></div>
                    <button className='add-note-button'>
                        <MaterialDesign.MdAdd className='add-note-button-icon' />
                        <span className="button-text">Add Note</span>
                    </button>
                </section>
            </header >
        );
    }
}

export default MainHeader;