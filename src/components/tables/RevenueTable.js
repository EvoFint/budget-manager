import React, { Component } from 'react';
import { AddButton } from "./AddButton";


export class RevenueTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                title: "доход"
            }
        };
        this.toggleState = this.toggleState.bind(this);
    }

    toggleState() {
        this.props.toggleState(this.state.data);
    }

    render() {
        return (
                    <div className='col'>
                        <div className="row">
                            <div className="col">
                                <h3>Доходы</h3>
                            </div>
                            <AddButton toggleState={this.toggleState}/>
                        </div>
                        <table className='table'>
                            <thead className='thead-dark'>
                            <tr>
                                <th scope='col'>Дата</th>
                                <th scope='col'>Категория</th>
                                <th scope='col'>Название</th>
                                <th scope='col'>Сумма</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope='row'>1</th>
                                <td>Транспорт</td>
                                <td>Билет в Новосибирск</td>
                                <td>3000</td>
                            </tr>
                            </tbody>
                            <tbody>
                            <tr>
                                <td colSpan="3"></td>
                                <td>Pepega</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
        );
    }
}