import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }

  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;
  }

  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }

  a {
    text-decoration: none;
  }

  li{
    list-style: none;
  }

  body.active-modal {
    overflow-y: hidden;
  }

  .btn-modal {
      padding: 10px 20px;
      display: block;
      margin: 100px auto 0;
      font-size: 18px;
  }

  .modal, .overlay {
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: fixed;
  }

  .overlay {
      background: rgba(49,49,49,0.8);
  }
  .modal-content {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      line-height: 1.4;
      background: #f1f1f1;
      padding: 14px 28px;
      border-radius: 3px;
      max-width: 600px;
      min-width: 300px;
  }

  .close-modal {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: 5px 7px;
  }

  @mixin break {
      thead {
          display: none;
      }

      tr {
          display: block;
          margin-bottom: 5px;
      }

      td {
          display: block;
          position: relative;
          padding-left: 130px;
          text-align: left;
          border-bottom: 0;

          &:last-child {
              border-bottom: 1px solid #ddd;            
          }

          &::before {
              content: attr(data-heading);
              position: absolute;
              top: 0;
              left: 0;
              width: 120px;
              height: 100%;
              display: flex;
              align-items: center;
              background-color: ${props => props.theme.colors.primary1};
              color: #fff;
              font-size: 0.75rem;
              padding: 0 5px;
              justify-content: center;
          }
      }
  }

  *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
  }

  .table-container {
      max-width: 800px;
      width: 90%;
      margin: 0 auto 40px;
      font-size: 1.6rem;

      &__title {
          background-color: #e10600;
          color: #fff;
          text-align: center;
          padding: 10px;

          h2 {
              font-size: 24px;
              font-weight: 300;
          }
      }

      &__table {
          width: 100%;
          border-collapse: collapse;
          color: #fff;

          thead {
              tr {
                  &:nth-child(even) {
                      background-color: ${props => props.theme.colors.background1};                      
                  }
              }
          }

          &--break-lg {
              @media (max-width: 991px) {
                  @include break;
              }
          }

          &--break-md {
              @media (max-width: 767px) {
                  @include break;
              }
          }

          &--break-lg {
              @media (max-width: 575px) {
                  @include break;
              }
          }
      }
  }
`;

export default GlobalStyles;