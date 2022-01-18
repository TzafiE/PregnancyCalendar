const express = require('express')

const app = express();

const googleAuthRouter = require('./routes/googleAuthentication');
const calendarRouter = require('./routes/calendar');
const usersRouter = require('./routes/users');

app.listen(80, () => console.log('Server is running'));

app.use('/googleAuth', googleAuthRouter);
app.use('/calendar', calendarRouter);
app.use('/users', usersRouter);

