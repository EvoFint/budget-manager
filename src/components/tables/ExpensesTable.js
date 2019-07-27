import React, { Component } from 'react';
import { AddButton } from "./AddButton";
import Moment from 'moment';

export class ExpensesTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                title: "расход"
            },
            idExpense: null,
            titleExpense: null,
            dateExpense: null,
            sumExpense: null,
            error: null,
            name: null,
            items: [],
            isLoaded: false
        };
        this.toggleState = this.toggleState.bind(this);
    }

    toggleState() {
        this.props.toggleState(this.state.data);
    };

    componentDidMount(){
        // fetch('/api/showexpense')
        //     .then(response => response.json())
        //     .then(result => {
        //         this.setState({
        //             // idExpense: result.id,
        //             // titleExpense: result.title,
        //             // dateExpense: result.date,
        //             // sumExpense: result.sum
        //         },
        //     },
        //     (error) => {
        //         this.setState ({
        //             error
        //         });
        //     }
        //     )
        fetch('/api/users')
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
            },
                (error) => {
                this.setState({
                   isLoaded: true,
                   error
                });
                }
            )
    }

    render() {
        // const {error, idExpense, titleExpense, dateExpense, sumExpense} = this.state;

        // if(error) {
        //     return <div>Ошибка: {error.message}</div>
        // } else {
        //     var dateFormatted = Moment(dateExpense).format("YYYY-MM-DD");
        // }
        const {error, isLoaded, items} = this.state;
        if(error) {
            return <div>Error: {error.message}</div>
        }else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
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
                            <th scope="row">{items}</th>
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
}