import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
    <h3 className="common-heading">Contact Page</h3>
    <div className="container">
          <div className="contact-form">
            <form action="https://formspree.io/f/mvojozbl" method="POST" className="contact-inputs">
              <input type="text" 
              placeholder="username"
               name="username"
               required
               autoComplete="off"
               />
               <input type="email" name="Email" placeholder="Email" autoComplete="off" required />
               <textarea name="message" cols="30" rows="10" autoComplete="off" placeholder="Enter your message"></textarea>
               <input type="submit" value="Send"/>
            </form>
          </div>
        </div>


    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14718.028689657765!2d75.85803826766124!3d22.74655211988583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd62465f107f%3A0x8a17220357631e8c!2sPardesipura%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1688717159389!5m2!1sen!2sin" width="100%"
     height="400"
      style={{border:0}}
       allowFullScreen=""
        loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
       
  </Wrapper>;
};

export default Contact;
