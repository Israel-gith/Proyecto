import { Container, Typography, Button, Box } from "@mui/material";

function App() {
    return (
        <>
            <header>
                <Typography variant="h1">
                    Página Login de Israel Rodríguez López
                </Typography>
            </header>

            <main>
            <Container>

                    <Typography variant="h1" color="primary">Typography h1 - Primary</Typography>
                    <br />
                    <Typography variant="h2" color="secondary">Typography h2 - Secondary</Typography>
                    <br />
                    <Typography variant="h3" color="textPrimary">Typography h3 - Text Primary</Typography>
                    <br />
                    <Typography variant="h4" color="textSecondary">Typography h4 - Text Secondary</Typography>
                    <br />
                    <Typography variant="h5" color="success">Typography h5 - Success</Typography>
                    <br />
                    <Typography variant="h6" color="warning">Typography h6 - Warning</Typography>
                    <br />
                    <Typography variant="subtitle1" color="error">Typography subtitle1 - Error</Typography>
                    <br />
                    <Typography variant="subtitle2" color="info">Typography subtitle2 - Info</Typography>
                    <br />
                    <Typography variant="body1" color="primary">Typography body1 - Primary</Typography>
                    <br />
                    <Typography variant="body2" color="secondary">Typography body2 - Secondary</Typography>
                    <br />
                    <Typography variant="caption" color="textDisabled">Typography caption - Text Disabled</Typography>
                    <br /><br />
                    <Typography variant="overline" color="warning">Typography overline - Warning</Typography>
                    <br /><br />
                    <Typography variant="button" color="success">Typography button - Success</Typography>
                    <br /><br />

                    <Box display="flex">
                        <Button variant="contained" color="primary">Botón contained - Primary</Button>
                        <Button variant="contained" color="secondary">Botón contained - Secondary</Button>
                        <Button variant="contained" color="error">Botón contained - Error</Button>
                        <Button variant="contained" color="warning">Botón contained - Warning</Button>
                        <Button variant="contained" color="success">Botón contained - Success</Button>
                        <Button variant="contained" color="info">Botón contained - Info</Button>
                        <Button variant="contained" disabled>Botón contained disabled</Button>
                    </Box>

                    <br /><br />

                    <Box display="flex">
                        <Button variant="outlined" color="primary">Botón outlined - Primary</Button>
                        <Button variant="outlined" color="secondary">Botón outlined - Secondary</Button>
                        <Button variant="outlined" color="error">Botón outlined - Error</Button>
                        <Button variant="outlined" color="warning">Botón outlined - Warning</Button>
                        <Button variant="outlined" color="success">Botón outlined - Success</Button>
                        <Button variant="outlined" color="info">Botón outlined - Info</Button>
                        <Button variant="outlined" disabled>Botón outlined disabled</Button>
                    </Box>

                    <br /><br />

                    <Box display="flex">
                        <Button variant="text" color="primary">Botón text - Primary</Button>
                        <Button variant="text" color="secondary">Botón text - Secondary</Button>
                        <Button variant="text" color="error">Botón text - Error</Button>
                        <Button variant="text" color="warning">Botón text - Warning</Button>
                        <Button variant="text" color="success">Botón text - Success</Button>
                        <Button variant="text" color="info">Botón text - Info</Button>
                        <Button variant="text" disabled>Botón text disabled</Button>
                        
                    </Box>
                    <br /><br />

            </Container>
            </main>

            <footer>
                <Typography variant="body2" align="center" color="textSecondary">
                    Proyecto Israel Rodríguez López
                </Typography>
            </footer>
        </>
    );
}

export default App;