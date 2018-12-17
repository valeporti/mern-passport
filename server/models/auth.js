import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const authSchema = new Schema({
  name: {type: 'String', required: true },
  email: {type: 'String', required: true, unique: true },
  username: {type: 'String', required: true, unique: true },
  password: {type: 'String', required: true },
  created_at: {type: 'Date', default: Date.now },
  updated_at: {type: 'Date', default: Date.now },
});

export default mongoose.model('User', authSchema);
