import React from "react";
// const WithClss = props => (
//     <div className={props.className}>
//         {props.children}
//     </div>
// )

const WithClss = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    )
}

export default WithClss;