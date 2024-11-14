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
// import logo1 from "./assets/logo_maria_lucinda.png";
import logo1 from "./assets/logo.png";
import logo2 from "./assets/logo_upa4.png"; // Caminho para a segunda logo
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

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
  const [tituloResultado, setTituloResultado] = useState(null);
  const [conteudoResultado, setConteudoResultado] = useState(null);
  const [conteudoSubtitleResultado, setConteudoSubtitleResultado] = useState(null);
  const [colorResultado, setColorResultado] = useState(null);
  const [colorType, setColorType] = useState(null);

  const [error, setError] = useState(false); // Estado para controlar erro de validação

  const handleUsoOxigenioChange = (e) => {
    const value = e.target.value;
    // console.log(getValorResposta3(e.target.value));
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
        case "≤83%":
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

    // console.log("valor da soma: " + getValorResposta1(resposta1) + "+" +
    //   getValorResposta2(resposta2) + "+" +
    //   getValorResposta3(resposta3) + "+" +
    //   getValorResposta4(resposta4) + "+" +
    //   getValorResposta5(resposta5) + "+" +
    //   getValorResposta6(resposta6) + "+" +
    //   getValorResposta7(resposta7));
    var titulo = "";
    var conteudo = "";
    var conteudoSubtitle = "";

    var color = "";
    var colorType = "";
    // if (resultado === 0 || resultado === 1) {
    //   titulo = "Reavaliar a cada 6 horas";
    //   color = "#4caf50";
    //   colorType = "success";
    // } else if (resultado === 2) {
    //   titulo =
    //     "Reavaliar a cada 4 horas (comunicar enfermeiro, comunicar médico)";
    //   color = "#ff9800";
    //   colorType = "warning";
    // } else if (resultado === 3 || resultado === 4) {
    //   titulo =
    //     "Reavaliar a cada 2 horas (comunicar enfermeiro e acionar o médico)";
    //   color = "orange";
    //   colorType = "warning";
    // } else if (resultado >= 5) {
    //   titulo = "INTERVENÇÕES IMEDIATAS, indicação de transfêrencia para UTI";
    //   color = "#ff1300";
    //   colorType = "danger";
    // }
    if(( getValorResposta1(resposta1) === 3 || getValorResposta2(resposta2) == 3 || getValorResposta3(resposta3) == 3 ||
      getValorResposta4(resposta4) == 3 ||
      getValorResposta5(resposta5) == 3 || 
      getValorResposta6(resposta6) == 3 ||
      getValorResposta7(resposta7) == 3 ) && resultado == 3  ){

        titulo =
        "Paciente com BAIXO a MODERADO risco de deterioração clínica";
      conteudo ="Avaliação URGENTE por um clínico qualificado com competência na avaliação de doenças agudas"
      conteudoSubtitle = "☞ Monitorar, no mínimo, de 1/1 hora <br/> ☞ Revisão urgente por médico para decidir mudança na frequência do monitoramento clínico ou escala de cuidado"
      color = "orange";
      colorType = "warning";

      }
     else if (resultado <=4 ) {
      titulo = "Paciente com BAIXO risco de deterioração clínica";
      conteudo = "Deve ser avaliado por profissional de enfermagem com habilidades para decidir se há necessidade de aumentar a frequência do monitoramento e/ou escalonamento de cuidados clínicos."
      conteudoSubtitle = "☞ Monitorar, no mínimo, a cada 4-6 horas <br/> ☞ Avaliação pelo profissional de enfermagem para decidir mudança na frequência do monitoramento ou escala de cuidado"
      color = "#4caf50";
      colorType = "success";
    } else if (resultado === 5 || resultado === 6 ) {
      titulo =
        "Paciente com MODERADO risco de deterioração clínica";
      conteudo ="Avaliação URGENTE por um clínico qualificado com competência na avaliação de doenças agudas"
      conteudoSubtitle = "☞ Monitorar, no mínimo, de 1/1 hora <br/> ☞ Revisão urgente por médico para decidir mudança na frequência do monitoramento clínico ou escala de cuidado"
      color = "orange";
      colorType = "warning";
    } else if (resultado >= 7) {
      titulo = "Paciente com ALTO risco de deterioração clínica";
      conteudo = "Avaliação de emergência por médico intensivista, com possível transferência do paciente para uma área de cuidados críticos (UTI) "
      conteudoSubtitle = "☞ Monitoramento contínuo dos sinais vitais <br/> ☞ Avaliação emergencial pela equipe médica ou time de resposta rápida e transferência para cuidados intensivos ou compatíveis/equivalentes"
      color = "#ff1300";
      colorType = "danger";
    }
    setCalculoResultado(resultado);

    setTituloResultado(titulo);
    setConteudoResultado(conteudo);
    setConteudoSubtitleResultado(conteudoSubtitle)

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
              style={{ height: 120, marginRight: "16px" }}
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
          <Typography sx={{ mb: 6 }} variant="h4" align="center" gutterBottom>
           Calculadora de News
          </Typography>
          {/* Pergunta 1 - Taxa Respiratória */}
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel required>Frequência Respiratória</InputLabel>
            <Select
              value={resposta1}
              onChange={(e) => {
                // console.log(getValorResposta1(e.target.value));
                setResposta1(e.target.value);
              }}
              label="Frequência Respiratória"
              required
            >
              <MenuItem value="">
                <em>Selecione...</em>
              </MenuItem>{" "}
              {/* Placeholder */}
              <MenuItem value="≤8">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span>≤8</span>
                  <span style={{ color: "#A9A9A9", fontWeight: "400" }}>
                    +3
                  </span>
                </div>
              </MenuItem>
              <MenuItem value="9-11">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span>9-11</span>
                  <span style={{ color: "#A9A9A9", fontWeight: "400" }}>
                    +1
                  </span>
                </div>
              </MenuItem>
              <MenuItem value="12-20">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span>12-20</span>
                  <span style={{ color: "#A9A9A9", fontWeight: "400" }}>0</span>
                </div>
              </MenuItem>
              <MenuItem value="21-24">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span>21-24</span>
                  <span style={{ color: "#A9A9A9", fontWeight: "400" }}>
                    +2
                  </span>
                </div>
              </MenuItem>
              <MenuItem value="≥25">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span>≥25</span>
                  <span style={{ color: "#A9A9A9", fontWeight: "400" }}>
                    +3
                  </span>
                </div>
              </MenuItem>
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
              label="Em uso de oxigênio suplementar?"
              required
            >
              <MenuItem value="">
                <em>Selecione...</em>
              </MenuItem>{" "}
              {/* Placeholder */}
              <MenuItem value="sim">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span>Sim</span>
                  <span style={{ color: "#A9A9A9", fontWeight: "400" }}>
                    +2
                  </span>
                </div>
              </MenuItem>
              <MenuItem value="não">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span>Não</span>
                  <span style={{ color: "#A9A9A9", fontWeight: "400" }}>0</span>
                </div>
              </MenuItem>
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
                onChange={(e) => {
                  // console.log(getValorResposta2(e.target.value));
                  setResposta2(e.target.value);
                }}
                label="SpO2% - Escala 1"
              >
                <MenuItem value="≤91%">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <span>≤91%</span>
                    <span style={{ color: "#A9A9A9", fontWeight: "400" }}>
                      +3
                    </span>
                  </div>
                </MenuItem>
                <MenuItem value="92%-93%">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <span>92%-93%</span>
                    <span style={{ color: "#A9A9A9", fontWeight: "400" }}>
                      +2
                    </span>
                  </div>
                </MenuItem>
                <MenuItem value="94%-95%">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <span>94%-95%</span>
                    <span style={{ color: "#A9A9A9", fontWeight: "400" }}>
                      +1
                    </span>
                  </div>
                </MenuItem>
                <MenuItem value="≥96%">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <span>≥96%</span>
                    <span style={{ color: "#A9A9A9", fontWeight: "400" }}>
                      0
                    </span>
                  </div>
                </MenuItem>
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
                onChange={(e) => {
                  // console.log(getValorResposta2(e.target.value));
                  setResposta2(e.target.value);
                }}
                label="SpO2% - Escala 2"
              >
                <MenuItem value="≤83%">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <span>≤83%</span>
                    <span style={{ color: "#A9A9A9", fontWeight: "400" }}>
                      +3
                    </span>
                  </div>
                </MenuItem>
                <MenuItem value="84%-85%">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <span>84%-85%</span>
                    <span style={{ color: "#A9A9A9", fontWeight: "400" }}>
                      +2
                    </span>
                  </div>
                </MenuItem>
                <MenuItem value="86%-87%">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <span>86%-87%</span>
                    <span style={{ color: "#A9A9A9", fontWeight: "400" }}>
                      +1
                    </span>
                  </div>
                </MenuItem>
                <MenuItem value="88%-92%≥ 93% em ar ambiente">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <span>88%-92% ≥ 93% em ar ambiente</span>
                    <span style={{ color: "#A9A9A9", fontWeight: "400" }}>
                      0
                    </span>
                  </div>
                </MenuItem>
                <MenuItem value="93%-94% com oxigênio">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <span>93%-94% com oxigênio</span>
                    <span style={{ color: "#A9A9A9", fontWeight: "400" }}>
                      +1
                    </span>
                  </div>
                </MenuItem>
                <MenuItem value="95%-96% com oxigênio">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <span> 95%-96% com oxigênio</span>
                    <span style={{ color: "#A9A9A9", fontWeight: "400" }}>
                      +2
                    </span>
                  </div>
                </MenuItem>
                <MenuItem value="≥ 97 com oxigênio">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <span>≥ 97 com oxigênio</span>
                    <span style={{ color: "#A9A9A9", fontWeight: "400" }}>
                      +3
                    </span>
                  </div>
                </MenuItem>
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
              onChange={(e) => {
                // console.log(getValorResposta4(e.target.value));
                setResposta4(e.target.value);
              }}
              label="Temperatura"
              required
            >
              <MenuItem value="">
                <em>Selecione...</em>
              </MenuItem>{" "}
              {/* Placeholder */}
              <MenuItem value="≤35ºC">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span>≤35ºC</span>
                  <span style={{ color: "#A9A9A9", fontWeight: "400" }}>
                    +3
                  </span>
                </div>
              </MenuItem>
              <MenuItem value="35,1-36ºC">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span>35,1-36ºC</span>
                  <span style={{ color: "#A9A9A9", fontWeight: "400" }}>
                    +1
                  </span>
                </div>
              </MenuItem>
              <MenuItem value="36,1-38ºC">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span>36,1-38ºC</span>
                  <span style={{ color: "#A9A9A9", fontWeight: "400" }}>0</span>
                </div>
              </MenuItem>
              <MenuItem value="38,1-39ºC">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span>38,1-39ºC</span>
                  <span style={{ color: "#A9A9A9", fontWeight: "400" }}>
                    +1
                  </span>
                </div>
              </MenuItem>
              <MenuItem value="≥39,1ºC">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span>≥39,1ºC</span>
                  <span style={{ color: "#A9A9A9", fontWeight: "400" }}>
                    +2
                  </span>
                </div>
              </MenuItem>
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
              onChange={(e) => {
                // console.log(getValorResposta5(e.target.value));
                setResposta5(e.target.value);
              }}
              label="Pressão Arterial Sistólica"
              required
            >
              <MenuItem value="">
                <em>Selecione...</em>
              </MenuItem>{" "}
              {/* Placeholder */}
              <MenuItem value="≤90">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span>≤90</span>
                  <span style={{ color: "#A9A9A9", fontWeight: "400" }}>
                    +3
                  </span>
                </div>
              </MenuItem>
              <MenuItem value="91-100">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span>91-100</span>
                  <span style={{ color: "#A9A9A9", fontWeight: "400" }}>
                    +2
                  </span>
                </div>
              </MenuItem>
              <MenuItem value="101-110">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span>101-110</span>
                  <span style={{ color: "#A9A9A9", fontWeight: "400" }}>
                    +1
                  </span>
                </div>
              </MenuItem>
              <MenuItem value="111-219">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span>111-219</span>
                  <span style={{ color: "#A9A9A9", fontWeight: "400" }}>
                    0
                  </span>
                </div>
              </MenuItem>
              <MenuItem value="≥220">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span>≥220</span>
                  <span style={{ color: "#A9A9A9", fontWeight: "400" }}>
                    +3
                  </span>
                </div>
              </MenuItem>
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
              onChange={(e) => {
                // console.log(getValorResposta6(e.target.value));
                setResposta6(e.target.value);
              }}
              label="Pulso(por minuto)"
              required
            >
              <MenuItem value="">
                <em>Selecione...</em>
              </MenuItem>{" "}
              {/* Placeholder */}
              <MenuItem value="≤40">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span>≤40</span>
                  <span style={{ color: "#A9A9A9", fontWeight: "400" }}>
                    +3
                  </span>
                </div>
              </MenuItem>
              <MenuItem value="41-50">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span>41-50</span>
                  <span style={{ color: "#A9A9A9", fontWeight: "400" }}>
                    +1
                  </span>
                </div>
              </MenuItem>
              <MenuItem value="51-90">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span>51-90</span>
                  <span style={{ color: "#A9A9A9", fontWeight: "400" }}>0</span>
                </div>
              </MenuItem>
              <MenuItem value="91-110">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span>91-110</span>
                  <span style={{ color: "#A9A9A9", fontWeight: "400" }}>
                    +1
                  </span>
                </div>
              </MenuItem>
              <MenuItem value="111-130">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span>111-130</span>
                  <span style={{ color: "#A9A9A9", fontWeight: "400" }}>
                    +2
                  </span>
                </div>
              </MenuItem>
              <MenuItem value="≥131">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span>≥131</span>
                  <span style={{ color: "#A9A9A9", fontWeight: "400" }}>
                    +3
                  </span>
                </div>
              </MenuItem>
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
              onChange={(e) => {
                // console.log(getValorResposta7(e.target.value));
                setResposta7(e.target.value);
              }}
              label="Pontuação AVPU"
              required
            >
              <MenuItem value="">
                <em>Selecione...</em>
              </MenuItem>{" "}
              {/* Placeholder */}
              <MenuItem value="A">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span>A - Alerta</span>
                  <span style={{ color: "#A9A9A9", fontWeight: "400" }}>
                    0
                  </span>
                </div>
              </MenuItem>
              <MenuItem value="V">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span>V - Responde a estímulo verbal</span>
                  <span style={{ color: "#A9A9A9", fontWeight: "400" }}>
                    +3
                  </span>
                </div>
              </MenuItem>
              <MenuItem value="P">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span>P - Responde à estímulo doloroso</span>
                  <span style={{ color: "#A9A9A9", fontWeight: "400" }}>
                    +3
                  </span>
                </div>
              </MenuItem>
              <MenuItem value="U">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span>U - Irresponssivo</span>
                  <span style={{ color: "#A9A9A9", fontWeight: "400" }}>
                    +3
                  </span>
                </div>
              </MenuItem>
            </Select>
            {error && !resposta7 && (
              <FormHelperText sx={{ color: "red" }}>
                Este campo é obrigatório.
              </FormHelperText>
            )}
          </FormControl>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              onClick={handleCalcular}
              background="#D4A373"
            >
              Calcular
            </Button>
          </div>
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
            <Typography variant="h6"   sx={{
              fontWeight: "bold",
            }}>{tituloResultado} </Typography>
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
              // color={colorResultado != null ? colorResultado : "#FFFFFF"}
            >
              {conteudoResultado}
            </Typography>
            <Typography
              variant="subtitle2"
              style={{
                // fontWeight: "bold",
                // fontSize: "1.2rem",
                marginTop: "10px",
                padding:'9px',
                border: '3px dashed #ccc', 
  borderRadius: '10px' 
              }}
              // color={colorResultado != null ? colorResultado : "#FFFFFF"}
              dangerouslySetInnerHTML={{ __html: conteudoSubtitleResultado}}
            />
              {/* {conteudoSubtitleResultado} */}
            {/* </Typography> */}
            
          </DialogContent>
          <DialogActions>
            {" "}
            {/* Centraliza o botão */}
            <Button
              onClick={handleCloseDialog}
              sx={{
                bgcolor: colorResultado,
                color: "#FFFFFF",
                "&:hover": {
                  bgcolor: colorResultado,
                },
              }}
            >
              Fechar
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      
      textAlign="center"
      
    >
      <Typography variant="subtitle2" gutterBottom >
        <span style={{fontWeight:'bold'}}>Fundação Manoel da Silva Almeida –</span><br />
        <span style={{fontWeight:'bold'}}>UPA TORRÕES – Dulce Sampaio</span><br />
        Rua Mirabela, nº 30 - Torrões<br />
        CNPJ: 09.767.633.0008/70<br />
        Fone: (81) 3184-4441<br />
        Site: www.hospitalmarialucinda.com.br
      </Typography>
    </Box>
    </ThemeProvider>
  );
};

export default EscalaNewsApp;
