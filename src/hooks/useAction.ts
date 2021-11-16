import { bindActionCreators } from "@reduxjs/toolkit"
import {useDispatch} from 'react-redux'
import ActionCreators from '../store/action-creators/'



export const useAction = ()=> {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}