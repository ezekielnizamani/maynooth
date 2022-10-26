import styled from "styled-components";

export const HeaderStyle = styled.div`
  padding: 2rem 0;
  border-bottom: solid 2px #5589a3;
`;
export const LogoBox = styled.div`
  width: 7rem;
`;
export const Image = styled.img`
  width: 100%;
`;
export const SocialMediaItem = styled.li`
  width: 4rem;
  height: 4rem;
  background: #5589a3;
  padding: 0.9rem;
  border-radius: 5rem;

  transition: ease-out 0.4s;
  &:not(:last-child){
    margin-right:1rem;
  }
  `;
export const SocialMediaItemList = styled.ul`
display:flex;
list-style:none;

`
export const HeaderFlex =  styled.div`

display: flex;
align-items: center;
justify-content: space-between;

`
export const SocialMediaItemLink = styled.a`
margin: auto;
color: #fff;
`
/* .header {
  padding: 2rem 0;
  border-bottom: solid 2px #5589a3;
}

.logo_box {
  width: 7rem;
}
.logo {
  width: 100%;
}
.social-media_item {
  width: 4rem;
  height: 4rem;
  background: #5589a3;
  padding: 0.5rem;
  border-radius: 5rem;

  transition: ease-out 0.4s;
}
.social-media_item img{
  transition: ease-out 0.4s;

}
.social-media_item a {
  margin: auto;
  color: #fff;
}
.social-media_item:hover {
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
}
.social-media_item:hover img {
  transform: scale(1.2);
}
.social-media_item:not(:last-child) {
  margin-right: 1rem;
} */
