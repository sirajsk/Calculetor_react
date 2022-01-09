import { ACTIONS } from "./App"
export default function DigitButton({ dispatch, digit }) {
    return <button onClick={() => dispatch({ type: ACTIONS.ADD_DIG, payload: { digit } })}>{digit}</button>
}