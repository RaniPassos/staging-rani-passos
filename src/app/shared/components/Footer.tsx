import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Divider } from '@mui/material';
import logo from 'https://www.aluno.ranipassos.com.br/static/media/logo.608a66b468fbd392cb50bc3a11eb1a34.svg';

export const Footer = () => {
  return (
    <>
      <Divider />
      <Box style={{ backgroundColor: '#FFF' }}>
        <Container maxWidth="lg">
          <Box
            py={4}
            display="flex"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box sx={{ margin: '0px 32px' }}>
              <Box
                component="img"
                src={logo}
                sx={{
                  height: 'auto',
                  width: 200,
                  display: { xs: 'none', md: 'flex' },
                  color: 'inherit',
                  mb: 2,
                }}
              />
              <Typography variant="body2">
                Rani Passos | Todos os direitos reservados
              </Typography>
            </Box>
            <Box component="div" sx={{ margin: '0px 32px' }}>
              <Typography
                color="textSecondary"
                component="p"
                variant="h5"
                gutterBottom={false}
              >
                Informática
                <br />
                para concursos
              </Typography>
              <p>A estratégia que faltava para você ser aprovado!</p>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
