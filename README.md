# desn3038-w25-e2

## Database credentials

- Hostname: `gbc.goodcodeclub.com`
- Username: `w25_{STUDENTID}`, where `{STUDENTID}` is your student ID (ex. `w25_101010101`)
- Password: `w25_{STUDENTID}`
- Database: `w25_{STUDENTID}_e2` (note `_e2` at the end)

## Checklist / before you begin

- Set up the database
- Create a new `.env` file in root directory with relevant data points
- Use two terminal windows (one for React, another for backend API)
- Install `nodemon` to auto-reload API script (`npm i nodemon -g`)
- Set the visibility of port 3001 to `public`

## Bring up

You can click on the `Split Terminal` button (square icon with vertical line through it) to open both terminals side by side.

### Terminal 1

Wait for the initial Codespaces process to complete.

```
npm run dev
```

### Terminal 2

```
npm i nodemon -g
nodemon backend/main.js
```

Thereafter, click on "Make Public" or use the "Ports" tab.

Have fun!