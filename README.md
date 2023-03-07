# MLT Front

Test application for MELI

## Running Live

https://mlt-front.herokuapp.com/

## Running the Backend (API)

If you will run this application locally, first you must run the backend locally. Instructions here:  

https://github.com/felippe-regazio/mlt-back

## Running Locally

Clone this repo, and inside it:  

Copy the `.env.example` file to `.env.local`

```
cp .env.example .env.local
```

Install the dependencies

```
npm install
```

Run the application

```
npm run start
```

## Database

To simplify the local development process, the database is configured on Mongo Atlas. So you dont need to install a local database to run this app.