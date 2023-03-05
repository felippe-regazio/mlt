import mongoose from 'mongoose';

const CredentialsSchema = new mongoose.Schema({
	email: { type: String, required: true },
	password: { type: String, select: false },
	firstName: { type: String },
	lastName: { type: String },
  walletId: { type: mongoose.Types.ObjectId }
});

export default mongoose.model('credentials', CredentialsSchema);