import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, increamentByValue } from "../Redux/features/counter/counterSlice";
const Counter = () => {

    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <div className="flex space-x-6 items-center">
            <button className="bg-red-500 px-3 py-1 rounded-md" onClick={() => dispatch(increamentByValue(5))}>Increment by 5</button>
            <button className="bg-red-500 px-3 py-1 rounded-md" onClick={() => dispatch(decrement())}>Decrement</button>
            <h1 className="text-xl">{count}</h1>
            <button className="bg-red-500 px-3 py-1 rounded-md" onClick={() => dispatch(increment())}>Increment</button>
        </div>
    );
};

export default Counter;