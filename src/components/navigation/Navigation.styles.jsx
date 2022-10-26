import styled from "styled-components";
export const NavigationStyle = styled.nav`
padding: 2rem 0;
`
export const SerachInput = styled.input`
  padding: 0.4rem;
  width: 100%;
  text-transform: capitalize;
  border: solid 1px;
  padding-left: 0.9rem;
  width: 100%;
  outline: none;
`;

export const NavigationList = styled.ul`
display:flex;
list-style: none;
align-items: center;
`
export const NavigationItem = styled.li`
margin-left:3rem;
font-weight: bold;

&:last-child{
    width: 3rem;
}
&:hover a{
    color:#5589a3;
}
`
export const  NavigationFlex = styled.div`
display:flex;
justify-content:space-between;
align-items:center
`
export const NavigationLink = styled.a`
color: #000;
text-decoration: none;
text-transform: capitalize;
transition:all ease 0.5s;
`


// .serach-input{
//     padding: 0.4rem;
//     width: 100%;
//     text-transform: capitalize;
//     border:  solid 1px;
//     padding-left: .9rem;
//     width: 100%;
// }
// .serach-input{
//     outline: none;
//   }
// .navigation{
//     padding: 2rem 0;
// }
// .search_box{
//     width: 50%;
// }
// .navigation-item:last-child{
//     width: 3rem;
// }
