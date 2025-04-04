import React from 'react';
import {
  Container,
  Typography,
  Box,
  CircularProgress
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import '@fortawesome/fontawesome-free/css/all.min.css';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)',
  },
  card: {
    textAlign: 'center',
    padding: '48px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '0 auto',
  },
  iconContainer: {
    marginBottom: '40px',
    color: '#3f51b5',
  },
  icon: {
    fontSize: '64px',
    animation: '$spin 2s linear infinite',
    display: 'inline-block',
  },
  title: {
    marginBottom: '24px',
    fontWeight: 700,
    color: '#1F2937',
  },
  mainMessage: {
    marginBottom: '32px',
    fontSize: '1.1rem',
    color: '#4B5563',
    lineHeight: '1.6',
  },
  returnMessage: {
    marginBottom: '32px',
    color: '#6B7280',
  },
  progressContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '32px',
  },
  additionalInfo: {
    color: '#9CA3AF',
    marginBottom: '8px',
  },
  footer: {
    marginTop: '32px',
    textAlign: 'center',
    color: '#6B7280',
  },
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
});

function Maintenance() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container>
        <Box className={classes.card}>
          {/* Ícone de Engrenagem Animada */}
          <Box className={classes.iconContainer}>
            <i className={`fas fa-cog ${classes.icon}`}></i>
          </Box>

          {/* Título Principal */}
          <Typography 
            variant="h4" 
            component="h1" 
            className={classes.title}
          >
            Em Manutenção
          </Typography>

          {/* Mensagem Principal */}
          <Typography 
            variant="body1" 
            className={classes.mainMessage}
            mt={2}
          >
            Estamos realizando algumas melhorias em nosso sistema para proporcionar uma experiência ainda melhor.
          </Typography>

          {/* Mensagem de Retorno */}
          <Typography 
            variant="h6" 
            className={classes.returnMessage}
            mt={2}
          >
            Voltaremos em breve!
          </Typography>

          {/* Barra de Progresso */}
          <Box className={classes.progressContainer} mt={2}>
            <CircularProgress 
              size={48}
              color="primary"
            />
          </Box>

          {/* Informação Adicional */}
          <Typography 
            variant="subtitle1" 
            className={classes.additionalInfo}
          >
            Agradecemos sua compreensão.
          </Typography>
        </Box>

        {/* Rodapé */}
        <Typography 
          variant="body2" 
          mt={2}
          className={classes.footer}
        >
          Para mais informações, entre em contato com nosso suporte.
        </Typography>
      </Container>
    </Box>
  );
}

export default Maintenance;