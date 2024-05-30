import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CreateIcon from "@mui/icons-material/Create";
import { IconButton } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const ProfileCard = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    borderRadius: "10px",

    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));
  const BoxPrice = styled(Paper)(({ theme }) => ({
    background: "rgb(9,121,109)",
    borderRadius: "10px",
    background:
      "linear-gradient(90deg, rgba(9,121,109,1) 0%, rgba(92,199,78,1) 100%)",
    margin: "2px",
    boxShadow: "none",
    padding: "20px",
  }));

  const CustomTypography = styled(Typography)(({ theme }) => ({
    color: "#ffffff",
    padding: "10px 0px 0px 20px",
  }));

  const CustomTypographyWallet = styled(Typography)(({ theme }) => ({
    color: "#666",
    padding: "10px 0px 0px 20px",
  }));

  const CustomTypographyAnotion = styled(Typography)(({ theme }) => ({
    color: "#ffffff",
    padding: "0px 0px 0px 20px",
  }));

  const CustomTypographyHeader = styled(Typography)(({ theme }) => ({
    color: "#000",
    padding: "0px 0px 0px 20px",
  }));

  const CustomTypographyMin = styled(Typography)(({ theme }) => ({
    color: "#000",
    padding: "0px 0px 0px 20px",
  }));

  
 

  const BoxWalet = styled(Paper)(({ theme }) => ({
    backgroundColor: "#dee3de",
    margin: "10px",
    boxShadow: "none",
    width: "25%",
    border: "1px solid #999",
    borderRadius: "10px",


    padding: "10px",
  }));

  const BoxNewWalet = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    border: "1px dashed #999",
    margin: "10px",
    borderRadius: "10px",

    boxShadow: "none",
    width: "25%",
    padding: "10px",
  }));

  return (
    <Box sx={{ backgroundColor: "#44403F", height: "100vh" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <Box sx={{ display: "flex", padding: "10px" }}>
              <Avatar
                sx={{
                  marginRight: "10px",
                  background: "rgb(50,172,166)",
                  background:
                    "linear-gradient(0deg, rgba(50,172,166,1) 0%, rgba(53,145,11,1) 100%)",
                }}
              >
                H
              </Avatar>
              <Typography variant="h4" component="h2">
                Кирилл
              </Typography>
              <IconButton>
                <CreateIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                padding: "10px",
                justifyContent: "space-between",
                width: "50%",
              }}
            >
              <Box>
                <Typography variant="h6" component="h2">
                  Телефон
                </Typography>
                <Typography
                  sx={{ fontWeight: 700 }}
                  variant="h6"
                  component="h2"
                >
                  +79788710997
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" component="h2">
                  Какое-то условие
                </Typography>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="ДА"
                  />
                </FormGroup>
              </Box>
              <Box>
                <Typography variant="h6" component="h2">
                  Вы гей?
                </Typography>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="ДА"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="НЕТ"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <BoxPrice>
              <CustomTypography variant="h4" component="h3">
                до 30%
              </CustomTypography>
              <CustomTypographyAnotion variant="h6" component="h3">
                Скидка
              </CustomTypographyAnotion>
            </BoxPrice>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <BoxPrice>
              <CustomTypography variant="h4" component="h3">
                5 000₽
              </CustomTypography>
              <CustomTypographyAnotion variant="h6" component="h3">
                Баланс
              </CustomTypographyAnotion>
            </BoxPrice>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            {" "}
            <BoxPrice>
              <CustomTypography variant="h4" component="h3">
                63 000₽
              </CustomTypography>
              <CustomTypographyAnotion variant="h6" component="h3">
                Сумма выкупа
              </CustomTypographyAnotion>
            </BoxPrice>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <CustomTypographyWallet variant="h5">
              Способы оплаты
            </CustomTypographyWallet>
            <Box sx={{ display: "flex", padding: "10px" }}>
              <BoxWalet>
                <CustomTypographyHeader variant="h6" component="h3">
                  Основной способ
                </CustomTypographyHeader>
                <CustomTypographyMin
                  sx={{ marginTop: "20%" }}
                  variant="h6"
                  component="h3"
                >
                 MIR..134
                </CustomTypographyMin>
              </BoxWalet>
              <BoxWalet>

              </BoxWalet>
              <BoxWalet>

              </BoxWalet>
              <BoxNewWalet>Блок новая карта</BoxNewWalet>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileCard;
