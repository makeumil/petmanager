import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NaverCallback = (props) => {

    const navigate = useNavigate();

    useEffect(() => {
        let code = new URL(window.location.href).searchParams.get("code");
        console.log(code);
    });

    return(
        <Wrap>
          
        </Wrap>
    );
}

const Wrap = styled.div`
    margin-top: 200px;
    min-height: 1100px;
`;

export default NaverCallback;