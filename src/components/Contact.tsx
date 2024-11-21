import React from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function Contact() {
  return (
      <div id="contact">
        <div className="items-container">
          <div className="contact_wrapper">
            <h1>Contact Me</h1>
            <p>제 이력서에 관심을 가져주신다면 언제든지 편하게 연락 주시면 감사하겠습니다.</p>
            <Box
                component="div"
                className='contact-info'
                sx={{ padding: 2, border: '1px solid #ddd', borderRadius: 2 }}
            >
              <Typography variant="h5" gutterBottom>
                Name
              </Typography>
              <Typography variant="body1">
                박주용
              </Typography>

              <Typography variant="h5" gutterBottom mt={2}>
                Email
              </Typography>
              <Typography variant="body1">
                wndyd3322@gmail.com
              </Typography>

              <Typography variant="h5" gutterBottom mt={2}>
                Phone
              </Typography>
              <Typography variant="body1">
                010-3687-6743
              </Typography>
            </Box>
          </div>
        </div>
      </div>
  );
}

export default Contact;
