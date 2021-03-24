import * as express from 'express';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import commentsRouter from './routes';
import connect from './models';


connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/comments')

const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());

app.use(commentsRouter)


app.listen(4000, () => console.log('Comments app is running!'))