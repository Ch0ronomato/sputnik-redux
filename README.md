# sputnik-redux
Built a small injest viewer for real time displays of sputnik data. Review links, ratings, etc. All using redux as the state manager, and react for a UI framework. Uses rd3 for the d3 integrations. Eventually this will be pulled out.

# Running

## backend
1. Install beautifulsoup (I used bs4)
2. Install flask
3. Install flask-socket.io
4. Install flask-cors
5. Run the server: `FLASK_DEBUG=1 FLASK_APP=server.py flask run`

You can also use the sputnik code individually if you like. Check out `test.py`.

## frontend
1. `cd redux-realtime`
2. `npm install`
3. `npm start`

Cheers
