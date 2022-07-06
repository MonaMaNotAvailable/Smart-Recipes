//Must use class component for error boundary
import { Component } from "react";
import { Link, Navigate } from "react-router-dom";

class ErrorBoundary extends Component {
    state = {hasError: false, redirect: false};

    static getDerivedStateFromError(){
        return {hasError:true};
    }

    componentDidCatch(error, info){
        console.error(error, info);
    }

    //not specific to ErrorBoundary, can be used with any class component
    componentDidUpdate(){
        if(this.state.hasError){
            setTimeout(() => this.setState({redirect: true}), 5000)
        }
    }

    render () {
        if(this.state.redirect){
            return <Navigate to="/" />;
        }else if(this.state.hasError){
            return (
                <h2>
                    {/* Add space by Prettier: {" "} */}
                    There was an error. {" "}
                    <Link to="/">Click here</Link> to homepage.
                </h2>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;