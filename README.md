# Video Chat Application - Production Deployment Guide

## Overview
This project consists of a React frontend client and a Node.js backend server using Express and Socket.io for real-time communication.

## Environment Variables
Create `.env` files in both `client` and `server` directories with the following variables:

### Server `.env`
```
PORT=5002
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
```

### Client `.env`
```
REACT_APP_SERVER_API=http://localhost:5002
```

Adjust URLs and ports as needed for your deployment environment.

## Building the Frontend
From the root directory, run:
```
npm run build --prefix client
```
This creates an optimized production build in `client/build`.

## Running the Backend Server
To start the backend server in production mode:
```
npm run start:prod --prefix server
```

## Serving the Frontend
You can serve the frontend build folder using any static file server, for example:
```
npx serve -s client/build
```

Alternatively, configure your web server (e.g., Nginx) to serve the static files and proxy API and WebSocket requests to the backend server.

## Notes
- Ensure environment variables are set securely in your production environment.
- Update CORS settings in `server.js` as needed for your deployment domain.
- Keep your Twilio credentials secure and do not commit them to version control.

## Troubleshooting
- If you encounter build errors, verify all dependencies are installed.
- Check that environment variables are correctly set.
- Review logs for backend server errors.

## Further Improvements
- Add Docker support for containerized deployment.
- Add HTTPS support and SSL certificates.
- Implement authentication and authorization as needed.

---

This guide should help you deploy the video chat application to production.
