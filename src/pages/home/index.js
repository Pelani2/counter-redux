import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/counterSlice";
import "./home-styles.scss";

const Home = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);

    return(
        <div className="counter">
            <h1 className="counter__title">
                Counter App
            </h1>
            <p className="counter__counting">
                Count: {counter}
            </p>
            <div className="counter__button-flex">
                <button onClick={() => dispatch(increment())} className="counter__button">
                    Increment
                </button>
                <button onClick={() => dispatch(decrement())} className="counter__button">
                    Decrement
                </button>
            </div>
            
        </div>
    );
};

export default Home;