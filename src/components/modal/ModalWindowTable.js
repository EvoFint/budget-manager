import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ModalWindowTable.css';

export class ModalWindowTable extends Component {

    render() {
        if(!this.props.show) {
            return null;
        }

        return (
            <div className="backdrop">
                <div className="modal">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h2>Добавить новый <span>{this.props.dataTable.title}</span></h2>
                            </div>
                        </div>

                        <div className="modal-body">
                            <div className="row">
                                <div className="col">
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button"
                                                id="dropdownMenuButton" data-toggle="dropdown">
                                            Dropdown button
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Название"/>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Сумма"/>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <div className="row">
                                <div className="col">
                                    <div className="row">
                                        <div className="col">
                                            <button type="button" className="btn btn-primary">
                                                Добавить
                                            </button>
                                        </div>
                                        <div className="col">
                                            <button type="button" className="btn btn-light" onClick={this.props.onClose}>
                                                Отменить
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    propTypes = {
        onClose: PropTypes.func.isRequired,
        show: PropTypes.bool,
        dataTable: PropTypes.object
    }
}
