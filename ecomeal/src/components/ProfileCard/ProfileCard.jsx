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
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const BoxPrice = styled(Paper)(({ theme }) => ({
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    margin: "10px",
    height: "100px",
  }));

  const CustomTypography = styled(Typography)(({ theme }) => ({
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    padding: "10px 0px 0px 20px",
  }));

  const CustomTypographyAnotion = styled(Typography)(({ theme }) => ({
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    margin: "0px 0px 0px 20px",
  }));

  return (
    <Box sx={{ backgroundColor: "#44403F", height: "700px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <Box sx={{ display: "flex", padding: "10px" }}>
              <Avatar sx={{ marginRight: "10px" }}>H</Avatar>
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
      </Grid>
    </Box>
  );
};

export default ProfileCard;
