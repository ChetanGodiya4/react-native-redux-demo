import React, { Component } from 'react'
import { Text, View } from 'react-native'
import MainScreen from '@containers'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'


import reducer from "@redux/reducers"
const loggerMidle = createLogger({ predicate: (getState, action) => __DEV__ })

function configureStore(initial) {
    const enhance = compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMidle
        )
    )
    return createStore(reducer, initial, enhance)
}

const store = configureStore({})


export class App extends Component {
    constructor(props) {
        super(props)
    }


    render() {

        return (
            <Provider store={store}>
                <MainScreen />
            </Provider>
        )
    }
}

export default App