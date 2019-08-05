import {  INCREMENT, DECREMENT } from '../actions'

const initialState = { value: 0 }

//'count'reducerを定義します。'reducers/index.js'のファイルに渡せるように'export'します。


//'reducer'は関数として定義して、引数は二つ持ちます。


//第一引数の'state'デフォルト時に状態を持っていないのてinitialStateを渡す

//関数の内部で受け取ったactionのtypeに応じて状態を変更してその結果をリターンで返していく。
//actionのtyoeは'action.type'で拾うことができる。
//処理が分岐するので'switch文'を書く
export default ( state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
        //'INCREMENT'の場合は'state.value + 1'したものをオブジェクトとして返す
            return { value: state.value + 1 }
        case DECREMENT:
            return { value: state.value - 1 }
        default:
            return state
    }
}


//reducerとはアプリケーションで扱う、状態を変更する責任を担うもの。
//storeは、アプリケーション内の全てのコンポーネントで使用できるようにするもの。