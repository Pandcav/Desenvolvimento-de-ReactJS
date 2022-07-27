import styled from "styled-components";

interface IPropsParallax {
    parallax1?: boolean
    parallax2?: boolean
    parallax3?: boolean
    parallax4?: boolean
}
interface IPropsTitleParalax {
    titleParalax1?: boolean

}

export const Wrapper = styled.div`
    width: 100%;
    margin: 0 auto;
`;
export const Main = styled.div`
  display:block;
  background-color: #fff ;
  position: relative;
`;
export const Parallax = styled.section <IPropsParallax>`
    display: flex;
    flex-direction:column ;
    align-items: center;
    justify-content: center ;
    height:100vh !important ;
    width:100% ;
    position:relative ;
    overflow: hidden;
    background-position: 50% 50% ;
    background-repeat:no-repeat;
    background-attachment:fixed;
    background-size:cover ;

    

    ::after{
        content:" ";
        height:100% ;
        width:100% ;
        position: absolute;
        z-index: 8;
        background: linear-gradient(to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,0) 60%, #000  100%) ;
    };

    ${(props) => props.parallax1 ? "background-image:url('src/img/5.jpg'); justify-content:space-between;" : null}
    ${(props) => props.parallax2 ? "background-image:url('src/img/6.jpg');" : null}
    ${(props) => props.parallax3 ? "background-image:url('src/img/7.jpg');" : null}
    ${(props) => props.parallax4 ? "background-image:url('src/img/8.jpg');" : null}

`;
export const TitleParalax = styled.h1 <IPropsTitleParalax>`
color: #fff;
text-align: center;
font-size: 78px;
z-index: 50;
text-transform: uppercase;

 ${(props) => props.titleParalax1 ? "margin: auto 0" : null}

`;
export const Content = styled.section`
padding: 40px 0;
background: #ece7d5;
`;
export const Container = styled.div`
width: 100%;
max-width: 760px;
margin:0 auto;
padding: 0 20px;

    p{
    margin-bottom: 40px;
}
p:last-child{
    margin-bottom: 0;
}


`;
export const TitleContainer = styled.h2``;