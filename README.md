<p align="center">
<a href="https://npm.im/passport-shikimori"><img src="https://img.shields.io/npm/v/passport-shikimori.svg?style=flat-square" alt="NPM version"></a>
<a href="https://npm.im/passport-shikimori"><img src="https://img.shields.io/npm/dt/passport-shikimori.svg?style=flat-square" alt="NPM downloads"></a>
</p>

Passport strategy for authentication with [Shikimori](https://shikimori.one) through the OAuth 2.0 API.

| 📖 [Documentation](docs/) |
|---------------------------|

## Installation
> **[Node.js](https://nodejs.org/) 12.0.0 or newer is required**

### Yarn
Recommended
```
yarn add passport-shikimori
```

### NPM
```
npm i passport-shikimori
```

## Usage

### Configure Strategy

The Shikimori authentication strategy authenticates users via a Shikimori user account and OAuth 2.0 token(s). A Shikimori API client ID, secret and redirect URL must be supplied when using this strategy. The strategy also requires a verify callback, which receives the access token and an optional refresh token, as well as a profile which contains the authenticated Shikimori user's profile. The verify callback must also call cb providing a user to complete the authentication.

```js
import { Strategy as ShikimoriStrategy } from 'passport-shikimori';

passport.use(new ShikimoriStrategy(
	{
		clientID: 'id',
		clientSecret: 'secret',
		callbackURL: 'callbackURL',
		scope: ['email', 'user_rates']
	},
	(accessToken, refreshToken, profile, done) => {
		User.findOne({
			where: {
				shikimoriId: profile.id
			}
		})
			.then(user => done(null, user))
			.catch(error => done(error));
	}
));
```

### Authentication Requests

Use `passport.authenticate()`, and specify the `'shikimori'` strategy to authenticate requests.

For example, as a route middleware in an Express app:

```ts
app.get('/auth/shikimori', passport.authenticate('shikimori'));
app.get(
	'/auth/shikimori/callback',
	passport.authenticate('shikimori', {
		failureRedirect: '/'
	}),
	(req, res) => {
		res.redirect('/secretstuff') // Successful auth
	}
);
```

### Refresh Token Usage

In some use cases where the profile may be fetched more than once or you want to keep the user authenticated, refresh tokens may wish to be used. A package such as [passport-oauth2-refresh](https://npm.im/passport-oauth2-refresh) can assist in doing this.

```ts
import { Strategy as ShikimoriStrategy } from 'passport-shikimori';

import refresh from 'passport-oauth2-refresh';

const shikimoriStrategy = new ShikimoriStrategy(
	{
		clientID: 'id',
		clientSecret: 'secret',
		callbackURL: 'callbackURL',
		scope: ['email', 'user_rates']
	},
	(accessToken, refreshToken, profile, done) => {
		profile.refreshToken = refreshToken; // store this for later refreshes
		
		User.findOne({
			where: {
				shikimoriId: profile.id
			}
		})
			.then(user => done(null, user))
			.catch(error => done(error));
	}
);

passport.use(shikimoriStrategy);
refresh.use(shikimoriStrategy);
```

... then if we require refreshing when fetching an update or something ...

```ts
refresh.requestNewAccessToken('shikimori', profile.refreshToken, (error, accessToken, refreshToken) => {
    if (error) {
        throw error; // boys, we have an error here.
	}
    
    profile.accessToken = accessToken; // store this new one for our new requests!
});
```
