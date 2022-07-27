import styled from 'styled-components';


export const Main = styled.div`
   width: 100%;
   height: 100vh;
   position: relative ;
   display:flex ;
   justify-content: center;
   align-items: center;
  
 
   
`;
interface IPropsImg {

   selected1?: boolean
   selected2?: boolean
   selected3?: boolean
   selected4?: boolean
}

interface IPropsBtn {
   selected?: boolean
}

interface IPropsSocialField {
   Twitter?: boolean
   Facebook?: boolean
   Google?: boolean
}

export const Imagens = styled.img<IPropsImg>`
   opacity: 0;
   width: 100%;
   height: 100vh;
   object-fit:cover ;
   background-repeat: no-repeat;
   background-position: center;
   position: absolute;
   animation-name: slid;
   animation-duration:20s ;
   animation-iteration-count: infinite;
   

   ${(props) => props.selected1 ? " " : null}
   ${(props) => props.selected2 ? "animation-delay: 5s ;" : null}
   ${(props) => props.selected3 ? "animation-delay: 10s ;" : null}
   ${(props) => props.selected4 ? "animation-delay: 15s ;" : null}

   @keyframes slid {
      25%{
         opacity:1;
      }

      50%{
         opacity: 0;
      }
   }

`;
export const Container = styled.div`
   position:absolute ;
    min-width: 350px;
    min-height: 40vh;
   background-color:rgba(0, 0, 0, 0.5) ;
   display: flex;
   flex-direction: column ;
   border-radius: 8px;
   padding: 2rem;


`;

export const Title = styled.h2`
   font-weight: 600;
   margin-bottom: 2rem;
   position: relative;
   color: #fff;
    
   ::before {
    content: '';
    position: absolute;
    height: 4px;
    width: 25px;
    bottom: 3px;
    left: 0;
    border-radius: 8px;
    background: linear-gradient(to left, rgb(245, 80, 10), rgb(245, 139, 10));
   }
`;
export const Form = styled.form`
   display: flex;
   flex-direction: column;
`;
export const InputField = styled.div`
   margin-bottom: 1rem;
   position: relative;

   input {
    outline: none;
    background-color: transparent;
    width: 100%;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.9)
   }

   input:focus~::after {
    transform: scaleX(1);
}
 
`;
export const Underline = styled.div`
    ::before {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    bottom: -4px;
    left: 0;
    background: rgb(163, 163, 163);
   }

    ::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    bottom: -4px;
    left: 0;
    background: linear-gradient(to left, rgb(80, 80, 80), rgb(22, 22, 22));
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
    transform-origin: right;
   }

    input:focus~::after {
    transform: scaleX(1);
   }

`;
export const Button = styled.button <IPropsBtn>`
   margin-top: 1rem;
   padding: 0.4rem;
   background: linear-gradient(to left, rgb(80, 80, 80), rgb(22, 22, 22));
   cursor: pointer;
   color: #fff;
   font-size: 0.9rem;
   font-weight: 300;
   border-radius: 4px;
   transition: all 0.3s ease;
   ${(props) => props.selected ? "background: linear-gradient(to left, rgb(245, 80, 10), rgb(245, 139, 10)); margin-top:1rem; ::hover{background: linear-gradient(to left, rgb(245, 139, 10)),rgb(245, 80, 10);}" : null}
`;

export const Footer = styled.footer`
   display: flex;
   flex-direction: column;
   margin-top: 1rem;
`;
export const Text = styled.span`
   color: rgba(255, 255,250, 0.9);
   font-size: 0.8rem;
   text-align: center;
`;
export const SocialFields = styled.div`
   padding: 0.4rem;
   border-radius: 4px;
   font-size: 0.85rem;
   width: 100%;
   cursor: pointer; 
`;
export const SocialField = styled.div<IPropsSocialField>`
 padding: 0.4rem;
 border-radius: 4px;
 font-size: 0.85rem;
 width: 100%;
 cursor: pointer;
 margin-top: 1rem;

 a{
    text-decoration: none;
    color: #fff;
 }
 i {
    margin: 0 0.5rem;
    width: 15px;
   }

 ${(props) => props.Twitter ? "background: linear-gradient(to right, #56a7f2, #468aca);" : null}
 ${(props) => props.Facebook ? "background: linear-gradient(to right, #1e3c72, #2a5298);" : null}
 ${(props) => props.Google ? "background: linear-gradient(to right, #b30903, #ff0f0f);" : null}
`;





