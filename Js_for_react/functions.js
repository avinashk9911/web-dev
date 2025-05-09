function myfunction(props){
    return <dev>{props.context}</dev>
}


const myfunction1 = (props) => {
    return <div>{props.content}</div>
}

// Arrow function : If you have only one line of code in the function, you can use arrow function syntax
const myfunction3 = (props) => <div>{props.content}</div>