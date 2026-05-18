# 🚀 Vercel Deployment Guide - Ray Retail

## Quick Start (Recommended: Separate Deployments)

### Step 1: Deploy Backend API

1. **Go to Vercel**: https://vercel.com/new
2. **Import Repository**: Select `tulu145/Ray-Retail`
3. **Configure Project**:
   - Project Name: `ray-retail-backend`
   - Framework Preset: `Other`
   - Root Directory: `backend`
   - Build Command: (leave empty)
   - Output Directory: (leave empty)
   - Install Command: `npm install`

4. **Add Environment Variables** (Click "Environment Variables"):
   ```
   DATABASE_URL=mongodb://satpalkyptronix:MgDX1yfZe86JY0Mv@cluster0-shard-00-00.ryhxx.mongodb.net:27017,cluster0-shard-00-01.ryhxx.mongodb.net:27017,cluster0-shard-00-02.ryhxx.mongodb.net:27017/Wholesaler?ssl=true&authSource=admin&retryWrites=true&w=majority
   
   JWT_SECRET=a64aaf44e77d68f1c4fe7bb10218926f4ca79d2d0f4f12ad8e664cbe17fea9f1b96204b082122547287d18cee25b3a9745180888ed8ca6d5730ec5a5b942618b
   
   STRIPE_SECRET_KEY=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
   
   STRIPE_PUBLISHABLE_KEY=pk_live_51MAeA9LUu4k32Wb7pRhRVQGFhx6HaA5e1S0eJFgrtap3OMpLzFvtbVHVtJwpRsCHBU5cyfTljMErNyBxeqjMXAt500ypjUvPbq
   
   WEBHOOK_ENDPOINT_SECRET=whsec_FtS0UI1CGXlNeAJvAeTmQN0R9OLzVegM
   
   EMAIL_USER=satpalemailcheck12@gmail.com
   
   EMAIL_PASS=wnev vnxw sjso shzw
   
   SHIPENGINE_API_KEY=TEST_vYfklLQTl7aTsEve+3ZFZ0/TIwRkfXlfnBYwNGmVlPs
   
   PAYPAL_MODE=sandbox
   
   PAYPAL_CLIENT_ID=ATmOliDZIqhsWJ16nE_WS2CS9v_tNjUD1l3GI4kJHLv11N2o1e7jVqfkBLexQaLjMVXFG3b67hPwvMOI
   
   PAYPAL_CLIENT_SECRET=EAVd7CpVm63CK1u-bjMqZuYQLToMoeithln_aJ2PzEN9gtwJjaTBABKUbwengsz18jzeR7WffPG_05eQ
   
   ADMIN_REGISTRATION_KEY=4b5a70fa82d5794dc4c3749f1df3189d32b09beec9dc506e274e2814ac0cbddf
   
   NODE_ENV=production
   ```

5. **Deploy Backend**
   - Click "Deploy"
   - Wait for deployment
   - **Copy your backend URL** (e.g., `https://ray-retail-backend.vercel.app`)

---

### Step 2: Deploy Frontend

1. **Go to Vercel**: https://vercel.com/new
2. **Import Repository**: Select `tulu145/Ray-Retail` again
3. **Configure Project**:
   - Project Name: `ray-retail-frontend`
   - Framework Preset: `Vite`
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Add Environment Variables**:
   ```
   VITE_STRIPE_PUBLISHABLE_KEY=pk_live_51MAeA9LUu4k32Wb7pRhRVQGFhx6HaA5e1S0eJFgrtap3OMpLzFvtbVHVtJwpRsCHBU5cyfTljMErNyBxeqjMXAt500ypjUvPbq
   
   VITE_BASE_URL=https://ray-retail-backend.vercel.app
   ```
   ⚠️ **Replace `https://ray-retail-backend.vercel.app` with YOUR actual backend URL from Step 1**

5. **Deploy Frontend**
   - Click "Deploy"
   - Wait for deployment
   - **Copy your frontend URL** (e.g., `https://ray-retail-frontend.vercel.app`)

---

### Step 3: Update Backend CORS Settings

After both deployments, you need to update the backend to allow your frontend URL:

1. **Go to your backend Vercel project**
2. **Settings** → **Environment Variables**
3. **Add these variables**:
   ```
   BASE_URL=https://ray-retail-backend.vercel.app
   FRONTEND_URL=https://ray-retail-frontend.vercel.app
   ```
   ⚠️ **Use YOUR actual URLs**

4. **Redeploy Backend**:
   - Go to "Deployments" tab
   - Click "..." on latest deployment
   - Click "Redeploy"

---

### Step 4: Configure Stripe Webhooks

1. **Go to Stripe Dashboard**: https://dashboard.stripe.com/webhooks
2. **Add Endpoint**:
   - Endpoint URL: `https://ray-retail-backend.vercel.app/webhook`
   - Events to send: Select all payment events
3. **Copy Signing Secret**
4. **Update Backend Environment Variable**:
   - Go to Vercel backend project
   - Settings → Environment Variables
   - Update `WEBHOOK_ENDPOINT_SECRET` with new signing secret
   - Redeploy

---

## ⚠️ Important Vercel Limitations

### 1. **File Uploads**
- Vercel serverless functions have a **4.5MB** request limit
- **Solution**: Use cloud storage (AWS S3, Cloudinary, or Vercel Blob)
- Your current upload folders won't persist on Vercel

### 2. **WebSocket/Socket.io**
- Socket.io may have connection issues on Vercel
- **Solution**: Consider using:
  - Pusher (https://pusher.com)
  - Ably (https://ably.com)
  - Or deploy backend on Railway/Render for WebSocket support

### 3. **Serverless Function Timeout**
- Free plan: 10 seconds
- Pro plan: 60 seconds
- **Solution**: Optimize long-running operations

---

## 🔧 Alternative: Deploy Backend on Railway/Render

If you face issues with Vercel's limitations:

### Railway (Recommended for WebSockets)
1. Go to https://railway.app
2. Connect GitHub repository
3. Select `backend` folder
4. Add all environment variables
5. Deploy

### Render
1. Go to https://render.com
2. New → Web Service
3. Connect repository
4. Root Directory: `backend`
5. Build Command: `npm install`
6. Start Command: `npm start`
7. Add environment variables
8. Deploy

---

## ✅ Post-Deployment Checklist

- [ ] Backend deployed successfully
- [ ] Frontend deployed successfully
- [ ] Environment variables configured
- [ ] CORS updated with frontend URL
- [ ] Stripe webhooks configured
- [ ] Test user registration
- [ ] Test login
- [ ] Test payment flow
- [ ] Test real-time chat
- [ ] Test file uploads (if applicable)

---

## 🐛 Troubleshooting

### CORS Errors
- Ensure frontend URL is added to `allowedOrigins` in backend
- Redeploy backend after changes

### Payment Not Working
- Check Stripe webhook is configured
- Verify `WEBHOOK_ENDPOINT_SECRET` matches Stripe
- Check Stripe dashboard for webhook delivery status

### Database Connection Failed
- Verify MongoDB Atlas allows connections from `0.0.0.0/0`
- Check `DATABASE_URL` is correct

### Build Failed
- Check build logs in Vercel
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

---

## 📞 Need Help?

If you encounter any issues:
1. Check Vercel deployment logs
2. Check browser console for errors
3. Check Stripe webhook logs
4. Verify all environment variables are set correctly

---

## 🎉 Success!

Once deployed, your application will be live at:
- **Frontend**: `https://your-frontend.vercel.app`
- **Backend API**: `https://your-backend.vercel.app`

Share your live URL and start using your wholesale retail platform! 🚀
