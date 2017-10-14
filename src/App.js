import React, { Component } from 'react'
import moment from 'moment'
import ReactGA from 'react-ga'
import './App.css'

class App extends Component {

    constructor(props) {
        super(props)

        const date = moment()
        const christmas = date.month() === 11 && date.date() === 24 ? 'Ja' : 'Nej'

        this.state = {
            christmas: christmas
        }
    }

    componentDidMount() {
        ReactGA.pageview('/')
    }

    render() {

        const { christmas } = this.state

        return (
            <div className='App'>
                <div className='container'>
                    <span>{christmas}</span>
                </div>
            </div>
        )
    }
}

export default App
