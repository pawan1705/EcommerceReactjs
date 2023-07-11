import React from 'react'
import styled from 'styled-components';
const Trusted = () => {
  return (
    <Wrapper className='brand-section'>
      <div className='container'>
        <h3>Trusted By 200+ Companies</h3>
        <div className='brand-section-slider'>
          <div className='slide'>
            <img src="https://thrivemyway.com/wp-content/uploads/2022/03/Adidas-Logo-Shoe-Brands.png" alt="trusted-brands"/>
          </div>
          <div className='slide'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKYdIHoejpOgethostRVKZpeWbskU5qmJXAw&usqp=CAU" alt="trusted-brands"/>
          </div>
          <div className='slide'>
            <img src="https://media.istockphoto.com/id/1206756294/vector/r-for-run-logo-icon-running-logo.jpg?s=612x612&w=0&k=20&c=QLncPPm2KjV0ZSOBxK7sZ3mNAvmy1fJ3uvLiTACCDh0=" alt="trusted-brands"/>
          </div>
          <div className='slide'>
            <img src="https://cdn.dribbble.com/userupload/3510223/file/original-1d8bc8fe152223b8577560e5c239abc4.jpg?compress=1&resize=400x300&vertical=center" alt="trusted-brands"/>
          </div>
          <div className='slide'>
            <img src="https://e7.pngegg.com/pngimages/607/248/png-clipart-logo-brand-font-product-bata-shoes-text-logo.png" alt="trusted-brands"/>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 7rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 8rem;
    height: 8rem;
  }

  .brand-section-slider {
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted