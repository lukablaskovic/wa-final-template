# wa-final-template

Predložak za pisanje 2. kolokvija iz Web aplikacija

## To-Do

Pokrenite `npm install` i izradite `.env` datoteku u _root_ direktoriju projekta.

- Podesite MongoDB atlas cluster prema uputama iz skripte WA5.
- Izradite korisnika, zabilježite lozinku i podesite 0.0.0.0/0 IP whitelist.
- Kopirajte connection string iz MongoDB atlas sučelja i zalijepite ga u `.env` datoteku pod `MONGODB_URI` varijablu.
- Izradite novu bazu podataka naziva `wa-final` i tražene kolekcije iz zadatka.
- Preporuka je koristiti aplikaciju MongoDB Compass ili VS Code Mongo ekstenziju za brži pregled baze podataka.

Ako sve radi, spremni ste za pisanje kolokvija.

## Pokretanje poslužitelja

- `npm run start` - ekvivalentno `node index.js`
- `npm run dev` - ekvivalentno `nodemon index.js` (automatsko ponovno pokretanje pri promjeni koda - preporuka)
