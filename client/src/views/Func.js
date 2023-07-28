import React from 'react';

function FuncComponent(props) {
    let { content } = props; // 상위 컴포넌트에서 전달받은 props 할당
    
    return(
        <div style={{color: 'white'}}>
            {content.map((image)=>{
                return(
                <p>{image}</p>
                );
            })}
        </div>
    )

}
export default FuncComponent;