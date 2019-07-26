import React, { Component } from 'react';
import { AddButton } from "./AddButton";

export class ExpensesTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                title: "расход"
            }
        };
        this.toggleState = this.toggleState.bind(this);
    }

    toggleState() {
        this.props.toggleState(this.state.data);
    };

    render() {
        return(
                <div className='col'>
                    <div className="row">
                        <div className="col">
                            <h3>Расходы</h3>
                        </div>
                        <AddButton toggleState={this.toggleState}/>
                    </div>
                    <table className='table'>
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col">Дата</th>
                            <th scope="col">Категория</th>
                            <th scope="col">Название</th>
                            <th scope="col">Сумма</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td colSpan="3"></td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
        )
    }
}