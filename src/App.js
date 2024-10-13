import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  CssBaseline,
  Container,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
  Box,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormHelperText,
} from "@mui/material";
import logo1 from "./assets/logo_maria_lucinda.png";
import logo2 from "./assets/logo_upa4.png"; // Caminho para a segunda logo
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

// Definindo o tema personalizado com as cores fornecidas
const theme = createTheme({
  palette: {
    primary: {
      main: "#D4A373", // Cor principal
    },
    secondary: {
      main: "#FAEDCD", // Cor secundária
    },
    background: {
      default: "#FEFAE0", // Cor de fundo
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
      color: "#D4A373",
    },
    body1: {
      fontSize: "1rem",
      color: "#555",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#fff",
          "&:hover": {
            backgroundColor: "#A37E5A",
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          width: "80%", // Largura do diálogo ajustada para 80%
          maxHeight: "80%", // Altura máxima do diálogo
        },
      },
    },
  },
});

const EscalaNewsApp = () => {
  const [resposta1, setResposta1] = useState("");
  const [resposta2, setResposta2] = useState("");
  const [resposta3, setResposta3] = useState("");
  const [resposta4, setResposta4] = useState("");
  const [resposta5, setResposta5] = useState("");
  const [resposta6, setResposta6] = useState("");
  const [resposta7, setResposta7] = useState("");

  const [openDialog, setOpenDialog] = useState(false);
  const [calculoResultado, setCalculoResultado] = useState(null);
  const [messageResultado, setMessageResultado] = useState(null);
  const [colorResultado, setColorResultado] = useState(null);
  const [colorType, setColorType] = useState(null);

  const [error, setError] = useState(false); // Estado para controlar erro de validação

  console.log("resposta2");
  console.log(resposta2);

  const handleUsoOxigenioChange = (e) => {
    const value = e.target.value;
    setResposta3(value);
    setResposta2(""); // Reseta a resposta da pergunta 2
  };

  const getValorResposta1 = (resposta) => {
    switch (resposta) {
      case "≤8":
        return 3;
      case "9-11":
        return 1;
      case "12-20":
        return 0;
      case "21-24":
        return 2;
      case "≥25":
        return 3;
      default:
        return 0; // Valor padrão se não houver resposta
    }
  };

  const getValorResposta2 = (resposta) => {
    if (resposta3 == "sim") {
      switch (resposta) {
        case "83%":
          return 3;
        case "84%-85%":
          return 2;
        case "86%-87%":
          return 1;
        case "88%-92%≥ 93% em ar ambiente":
          return 0;
        case "93%-94% com oxigênio":
          return 1;
        case "95%-96% com oxigênio":
          return 2;
        case "≥ 97 com oxigênio":
          return 3;
        default:
          return 0; // Valor padrão se não houver resposta
      }
    }
    if (resposta3 == "não") {
      switch (resposta) {
        case "≤91%":
          return 3;
        case "92%-93%":
          return 2;
        case "94%-95%":
          return 1;
        case "≥96%":
          return 0;

        default:
          return 0; // Valor padrão se não houver resposta
      }
    }
  };
  const getValorResposta3 = (resposta) => {
    switch (resposta) {
      case "sim":
        return 2;
      default:
        return 0; // Valor padrão se não houver resposta
    }
  };

  const getValorResposta4 = (resposta) => {
    switch (resposta) {
      case "≤35ºC":
        return 3;
      case "35,1-36ºC":
        return 1;
      case "36,1-38ºC":
        return 0;
      case "38,1-39ºC":
        return 1;
      case "≥39,1ºC":
        return 2;
      default:
        return 0; // Valor padrão se não houver resposta
    }
  };

  const getValorResposta5 = (resposta) => {
    switch (resposta) {
      case "≤90":
        return 3;
      case "91-100":
        return 2;
      case "101-110":
        return 1;
      case "111-219":
        return 0;
      case "≥220":
        return 3;
      default:
        return 0; // Valor padrão se não houver resposta
    }
  };

  const getValorResposta6 = (resposta) => {
    switch (resposta) {
      case "≤40":
        return 3;
      case "41-50":
        return 1;
      case "51-90":
        return 0;
      case "91-110":
        return 1;
      case "111-130":
        return 2;
      case "≥131":
        return 3;
      default:
        return 0; // Valor padrão se não houver resposta
    }
  };

  const getValorResposta7 = (resposta) => {
    switch (resposta) {
      case "A":
        return 0;
      case "V":
        return 3;
      case "P":
        return 3;
      case "U":
        return 3;

      default:
        return 0; // Valor padrão se não houver resposta
    }
  };

  const handleCalcular = () => {
    // Verifica se todas as respostas foram preenchidas
    if (
      !resposta1 ||
      !resposta2 ||
      !resposta3 ||
      !resposta4 ||
      !resposta5 ||
      !resposta6 ||
      !resposta7
    ) {
      setError(true); // Ativa a validação de erro
      return;
    }

    setError(false); // Reseta o erro se tudo estiver preenchido

    // Aqui você pode realizar o cálculo real com base nas respostas
    var resultado =
      getValorResposta1(resposta1) +
      getValorResposta2(resposta2) +
      getValorResposta3(resposta3) +
      getValorResposta4(resposta4) +
      getValorResposta5(resposta5) +
      getValorResposta6(resposta6) +
      getValorResposta7(resposta7);
    var message = "";
    var color = "";
    var colorType = "";
    if (resultado === 0 || resultado === 1) {
      message = "Reavaliar a cada 6 horas";
      color = "#4caf50";
      colorType = "success"
    } else if (resultado === 2) {
      message =
        "Reavaliar a cada 4 horas (comunicar enfermeiro, comunicar médico)";
      color = "#ff9800";
      colorType = "warning"
    } else if (resultado === 3 || resultado === 4) {
      message =
        "Reavaliar a cada 2 horas (comunicar enfermeiro e acionar o médico)";
      color = "orange";
      colorType = "warning"
    } else if (resultado >= 5) {
      message = "INTERVENÇÕES IMEDIATAS, indicação de transfêrencia para UTI";
      color = "#ff1300";
      colorType = "danger"
    }
    setCalculoResultado(resultado);
    setMessageResultado(message);
    setColorResultado(color);
    setColorType(colorType);
    setOpenDialog(true); // Abre o dialog
  };

  const handleCloseDialog = () => {
    setOpenDialog(false); // Fecha o dialog
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundSize: "cover",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 4,
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ mb: 4 }}
        >
          <Grid item>
            <img
              src={logo1}
              alt="Logo 1"
              style={{ height: 80, marginRight: "16px" }}
            />
          </Grid>
          <Grid item>
            <img src={logo2} alt="Logo 2" style={{ height: 80 }} />
          </Grid>
        </Grid>

        <Container
          maxWidth="sm"
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderRadius: 4,
            padding: 4,
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Escala NEWS-2
          </Typography>
          {/* Pergunta 1 - Taxa Respiratória */}
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel required>Frequência Respiratória</InputLabel>
            <Select
              value={resposta1}
              onChange={(e) => setResposta1(e.target.value)}
              label="Taxa Respiratória"
              required
            >
              <MenuItem value="">
                <em>Selecione...</em>
              </MenuItem>{" "}
              {/* Placeholder */}
              <MenuItem value="≤8">≤8</MenuItem>
              <MenuItem value="9-11">9-11</MenuItem>
              <MenuItem value="12-20">12-20</MenuItem>
              <MenuItem value="21-24">21-24</MenuItem>
              <MenuItem value="≥25">≥25</MenuItem>
            </Select>
            {error && !resposta1 && (
              <FormHelperText sx={{ color: "red" }}>
                Este campo é obrigatório.
              </FormHelperText>
            )}
          </FormControl>

          {/* Pergunta 3 - Uso de oxigênio */}
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel required>Em uso de oxigênio suplementar?</InputLabel>
            <Select
              value={resposta3}
              // onChange={(e) => setResposta3(e.target.value)}
              onChange={handleUsoOxigenioChange}
              label="Em uso de oxigênio?"
              required
            >
              <MenuItem value="">
                <em>Selecione...</em>
              </MenuItem>{" "}
              {/* Placeholder */}
              <MenuItem value="sim">Sim</MenuItem>
              <MenuItem value="não">Não</MenuItem>
            </Select>
            {error && !resposta3 && (
              <FormHelperText sx={{ color: "red" }}>
                Este campo é obrigatório.
              </FormHelperText>
            )}
          </FormControl>
          {resposta3 == "não" && (
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>SpO2% - Escala 1</InputLabel>
              <Select
                value={resposta2}
                onChange={(e) => setResposta2(e.target.value)}
                label="Saturação"
              >
                <MenuItem value="≤91%">≤91%</MenuItem>
                <MenuItem value="92%-93%">92%-93%</MenuItem>
                <MenuItem value="94%-95%">94%-95%</MenuItem>
                <MenuItem value="≥96%">≥96%</MenuItem>
              </Select>
              {error && !resposta2 && resposta3 == "não" && (
                <FormHelperText sx={{ color: "red" }}>
                  Este campo é obrigatório.
                </FormHelperText>
              )}
            </FormControl>
          )}
          {resposta3 == "sim" && (
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>SpO2% - Escala 2</InputLabel>
              <Select
                value={resposta2}
                onChange={(e) => setResposta2(e.target.value)}
                label="Saturação"
              >
                <MenuItem value="≤83%">≤83%</MenuItem>
                <MenuItem value="84%-85%">84%-85%</MenuItem>
                <MenuItem value="86%-87%">86%-87%</MenuItem>
                <MenuItem value="88%-92%≥ 93% em ar ambiente">
                  88%-92% ≥ 93% em ar ambiente
                </MenuItem>
                <MenuItem value="93%-94% com oxigênio">
                  93%-94% com oxigênio
                </MenuItem>
                <MenuItem value="95%-96% com oxigênio">
                  95%-96% com oxigênio
                </MenuItem>
                <MenuItem value="≥ 97 com oxigênio">≥ 97 com oxigênio</MenuItem>
              </Select>
              {error && !resposta2 && resposta3 == "sim" && (
                <FormHelperText sx={{ color: "red" }}>
                  Este campo é obrigatório.
                </FormHelperText>
              )}
            </FormControl>
          )}
          {/* Pergunta 4 - Temperatura */}
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel required>Temperatura</InputLabel>
            <Select
              value={resposta4}
              onChange={(e) => setResposta4(e.target.value)}
              label="Temperatura"
              required
            >
              <MenuItem value="">
                <em>Selecione...</em>
              </MenuItem>{" "}
              {/* Placeholder */}
              <MenuItem value="≤35ºC">≤35ºC</MenuItem>
              <MenuItem value="35,1-36ºC">35,1-36ºC</MenuItem>
              <MenuItem value="36,1-38ºC">36,1-38ºC</MenuItem>
              <MenuItem value="38,1-39ºC">38,1-39ºC</MenuItem>
              <MenuItem value="≥39,1ºC">≥39,1ºC</MenuItem>
            </Select>
            {error && !resposta4 && (
              <FormHelperText sx={{ color: "red" }}>
                Este campo é obrigatório.
              </FormHelperText>
            )}
          </FormControl>
          {/* Pergunta 5 - Pressão Arterial Sistólica */}
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel required>Pressão Arterial Sistólica</InputLabel>
            <Select
              value={resposta5}
              onChange={(e) => setResposta5(e.target.value)}
              label="Pressão Arterial"
              required
            >
              <MenuItem value="">
                <em>Selecione...</em>
              </MenuItem>{" "}
              {/* Placeholder */}
              <MenuItem value="≤90">≤90</MenuItem>
              <MenuItem value="91-100">91-100</MenuItem>
              <MenuItem value="101-110">101-110</MenuItem>
              <MenuItem value="111-219">111-219</MenuItem>
              <MenuItem value="≥220">≥220</MenuItem>
            </Select>
            {error && !resposta5 && (
              <FormHelperText sx={{ color: "red" }}>
                Este campo é obrigatório.
              </FormHelperText>
            )}
          </FormControl>
          {/* Pergunta 6 - Frequência Cardíaca */}
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel required>Pulso(por minuto)</InputLabel>
            <Select
              value={resposta6}
              onChange={(e) => setResposta6(e.target.value)}
              label="Pulso(por minuto)"
              required
            >
              <MenuItem value="">
                <em>Selecione...</em>
              </MenuItem>{" "}
              {/* Placeholder */}
              <MenuItem value="≤40">≤40</MenuItem>
              <MenuItem value="41-50">41-50</MenuItem>
              <MenuItem value="51-90">51-90</MenuItem>
              <MenuItem value="91-110">91-110</MenuItem>
              <MenuItem value="111-130">111-130</MenuItem>
              <MenuItem value="≥131">≥131</MenuItem>
            </Select>
            {error && !resposta6 && (
              <FormHelperText sx={{ color: "red" }}>
                Este campo é obrigatório.
              </FormHelperText>
            )}
          </FormControl>
          {/* Pergunta 7 - Pontuação AVPU */}
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel required>Pontuação AVPU</InputLabel>
            <Select
              value={resposta7}
              onChange={(e) => setResposta7(e.target.value)}
              label="Pontuação AVPU"
              required
            >
              <MenuItem value="">
                <em>Selecione...</em>
              </MenuItem>{" "}
              {/* Placeholder */}
              <MenuItem value="A">A - Alerta</MenuItem>
              <MenuItem value="V">V - Responde a estímulo verbal</MenuItem>
              <MenuItem value="P">P - Responde à estímulo doloroso</MenuItem>
              <MenuItem value="U">U - Irresponssivo</MenuItem>
            </Select>
            {error && !resposta7 && (
              <FormHelperText sx={{ color: "red" }}>
                Este campo é obrigatório.
              </FormHelperText>
            )}
          </FormControl>

          <Button
            variant="contained"
            onClick={handleCalcular}
            background="#D4A373"
          >
            Calcular
          </Button>
        </Container>

        {/* Diálogo para mostrar o resultado do cálculo */}
        <Dialog open={openDialog} onClose={handleCloseDialog}>
      <DialogTitle
        sx={{
          bgcolor: colorResultado,
          color: "#FFFFFF",
          fontWeight: "bold",
          padding: "16px",
          textAlign: "center", // Centraliza o título
        }}
      >
        <Typography variant="h6">Cálculo NEWS 2 </Typography>
        
       
      </DialogTitle>
      <DialogContent 
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Centraliza os itens na horizontal
          justifyContent: "center", // Centraliza os itens na vertical
          textAlign: "center", // Alinha o texto dos Typography
          padding: "24px",
        }}
      >
        <Typography
          variant="body1"
          style={{ marginTop: "25px", fontWeight: "bold" }}
        >
          NEWS: {calculoResultado}
        </Typography>
        <Typography
          variant="h6"
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            marginTop: "10px",
          }}
          color={colorResultado != null ? colorResultado : "#FFFFFF"}
        >
          {messageResultado}
        </Typography>
        
      </DialogContent>
      <DialogActions > {/* Centraliza o botão */}
        <Button
          onClick={handleCloseDialog}
          sx={{
            bgcolor: colorResultado,
            color: "#FFFFFF",
            '&:hover': {
              bgcolor: colorResultado,
            },
          }}
        >
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
      </Box>
    </ThemeProvider>
  );
};

export default EscalaNewsApp;
