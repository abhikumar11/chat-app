import styled from "styled-components";

const Main = (props) => {
     return (
          <Container>
               <ShareBox>
                    <div>
                         <img src="/images/user.svg" alt="" />
                         <button>Start a post</button>
                    </div>
                    <div>
                         <button>
                              <img src="/images/photo-icon.svg" alt="" />
                              <span>Photo</span>
                         </button>
                         <button>
                              <img src="/images/video-icon.svg" alt="" />
                              <span>Video</span>
                         </button>
                         <button>
                              <img src="/images/event-icon.svg" alt="" />
                              <span>Event</span>
                         </button>
                         <button>
                              <img src="/images/article-icon.svg" alt="" />
                              <span>Write article</span>
                         </button>
                    </div>
               </ShareBox>
               <div>
                    <Article>
                         <SharedActor>
                              <a>
                                   <img src="/images/user.svg" alt="" />
                                   <div>
                                        <span>Title</span>
                                        <span>Info</span>
                                        <span>Date</span>
                                   </div>
                              </a>
                              <button>
                                   <img src="/images/ellipsis.svg" alt="" />
                              </button>
                         </SharedActor>
                         <Description>Description</Description>
                         <SharedImg>
                              <a>
                                   <img src="/images/shared-image.jpg" alt="" />
                              </a>
                         </SharedImg>
                         <SocialCounts>
                              <li>
                                   <button>
                                        <img
                                             src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
                                             alt=""
                                        />
                                        <img
                                             src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97"
                                             alt=""
                                        />
                                        <span>75</span>
                                   </button>
                              </li>
                              <li>
                                   <a>2 comments</a>
                              </li>
                         </SocialCounts>
                         <SocialActions>
                         <button>
                              <img src="/images/like-icon.svg" alt="" />
                              <span>Like</span>
                         </button>
                         <button>
                              <img src="/images/comment-icon.svg" alt="" />
                              <span>Comments</span>
                         </button>
                         <button>
                              <img src="/images/share-icon.svg" alt="" />
                              <span>Share</span>
                         </button>
                         <button>
                              <img src="/images/send-icon.svg" alt="" />
                              <span>Send</span>
                         </button>
                         </SocialActions>
                    </Article>
               </div>
          </Container>
     );
};

const Container = styled.div`
     grid-area: main;
`;
const CommonCard = styled.div`
     text-align: center;
     overflow: hidden;
     margin-bottom: 8px;
     background-color: #fff;
     border-radius: 5px;
     position: relative;
     border: none;
     box-shadow: 0 0 0 1px rgb(0 0 0/15%), 0 0 0 rgb(0 0 0/20%);
`;
const ShareBox = styled(CommonCard)`
     display: flex;
     flex-direction: column;
     color: #958b7b;
     margin: 0 0 8px;
     background-color: white;
     div {
          button {
               outline: none;
               color: rgba(0, 0, 0, 0.6);
               min-height: 41px;
               background: transparent;
               border: none;
               display: flex;
               align-items: center;
               font-weight: 600;
          }
          &:first-child {
               display: flex;
               align-items: center;
               padding: 18px 16px 0px 16px;
               img {
                    width: 48px;
                    border-radius: 50%;
                    margin-right: 8px;
               }
               button {
                    flex-grow: 1;
                    margin: 4px 0;
                    border-radius: 35px;
                    padding-left: 16px;
                    border: 1px solid rgba(0, 0, 0, 0.15);
                    border-radius: 35px;
                    background-color: white;
                    text-align: left;
               }
          }
          &:nth-child(2) {
               display: flex;
               flex-wrap: wrap;
               justify-content: space-around;
               padding-bottom: 4px;
               button {
                    img {
                         margin: 0 4px 0 -2px;
                    }
                    span {
                         color: #70b5f9;
                    }
               }
          }
     }
`;
const Article = styled(CommonCard)`
     padding: 0;
     margin: 0 0 8px;
     overflow: visible;
`;
const SharedActor = styled.div`
     padding-right: 40px;
     padding: 12px 16px 0;
     flex-wrap: nowrap;
     margin-bottom: 8px;
     align-items: center;
     display: flex;
     a {
          margin-right: 12px;
          flex-grow: 1;
          overflow: hidden;
          display: flex;
          text-decoration: none;
          img {
               width: 48px;
               height: 48px;
          }
          & > div {
               display: flex;
               flex-direction: column;
               flex-grow: 1;
               flex-basis: 0;
               margin-left: 8px;
               overflow: hidden;
               span {
                    text-align: left;
                    &:first-child {
                         font-size: 14px;
                         font-weight: 700;
                         color: rgba(0, 0, 0, 1);
                    }
                    &:nth-child(n + 1) {
                         font-size: 12px;
                         color: rgba(0, 0, 0, 0.6);
                    }
               }
          }
     }
     button {
          position: absolute;
          right: 12px;
          top: 0;
          background: transparent;
          border: none;
          outline: none;
     }
`;
const Description = styled.div`
     padding: 0 16px;
     overflow: hidden;
     color: rgba(0, 0, 0, 0.9);
     font-size: 14px;
     text-align: left;
`;
const SharedImg = styled.div`
     margin-top: 8px;
     width: 100%;
     display: block;
     position: relative;
     background-color: #f9fafb;
     img {
          object-fit: contain;
          width: 100%;
          height: 100%;
     }
`;
const SocialCounts = styled.ul`
     line-height: 1.3;
     display: flex;
     align-items: flex-start;
     overflow: auto;
     margin: 0 16px;
     padding: 8px 0;
     border-bottom: 1px solid #e9efdf;
     color: rgba(0, 0, 0, 0.6);
     list-style: none;
     li {
          margin-right: 5px;
          font-size: 12px;
          button {
               display: flex;
               border: none;
               color: rgba(0, 0, 0, 0.6);
               background: transparent;
               span {
                    padding-left: 5px;
               }
          }
     }
`;

const SocialActions = styled.div`
     display: flex;
     align-items: center;
     justify-content: flex-start;
     margin: 4px 12px;
     min-height: 40px;
     padding-bottom: 5px;
     button {
          display: inline-flex;
          align-items: center;
          padding: 8px;
          border: none;
          background: transparent;
          span {
               margin-left: 4px;
               color: rgba(0, 0, 0, 0.6);
               font-size: 14px;
          }
     }
     button.active {
          span {
               color: #0a66c2;
               font-weight: 600;
          }
          svg {
               fill: #0a66c2;
          }
     }
`;
export default Main;
