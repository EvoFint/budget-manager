import React, {Component} from 'react';
import { RevenueTable } from './tables/RevenueTable';
import { ExpensesTable} from "./tables/ExpensesTable";
import { ModalWindowTable } from './modal/ModalWindowTable'

export class Table extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            dataTable: {}
        };
        this.toggleState = this.toggleState.bind(this);
    }

    toggleState(data) {
        this.setState({
            isOpen: !this.state.isOpen
        });
        this.setState({
            dataTable: data
        });
    };

    render() {
        return (
            <div>
                <div className='container'>
                    <div className="row">
                        <div className="col">
                            <RevenueTable toggleState={this.toggleState}/>
                        </div>
                        <div className="col">
                            <ExpensesTable toggleState={this.toggleState}/>
                        </div>
                    </div>
                </div>
                <ModalWindowTable show={this.state.isOpen} onClose={this.toggleState} dataTable={this.state.dataTable}/>
            </div>
        )
    };

}