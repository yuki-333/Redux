//この'index.js'は全ての'reducer'を結合する役割を持っている。

import {combineReducers} from 'redux'
import count from './count'

export default combineReducers({ count })
