import {useDispatch} from "react-redux";
import { bindActionCreators } from "redux";
import {AllActionCreators} from "../store/ActionCreators";

const useAction = () => {
    const dispatch = useDispatch()
    return bindActionCreators(AllActionCreators, dispatch)
}

export default useAction