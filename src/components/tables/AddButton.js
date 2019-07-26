import React, { Component } from 'react';

export class AddButton extends Component {

    render() {
        return (
            <div className="col" align="right">
                <button type='button' className='btn btn-secondary' onClick={this.props.toggleState}>Добавить</button>
            </div>
        )
    }
}