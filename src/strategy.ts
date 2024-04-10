import OAuth2Strategy from 'passport-oauth2';

import type { Profile, Request, StrategyOptions, StrategyOptionsWithRequest, VerifyCallback } from './types';

const { InternalOAuthError } = OAuth2Strategy;

export class Strategy extends OAuth2Strategy {
    public name: string;

    protected clientID: string;

    // @ts-expect-error ts... why?
    public constructor(
        options: StrategyOptions,
        verify: (accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) => void,
    );

    public constructor(
        options: StrategyOptions,
        verify: (
            accessToken: string,
            refreshToken: string,
            // biome-ignore lint/suspicious/noExplicitAny: we don't know params
            params: any,
            profile: Profile,
            done: VerifyCallback,
        ) => void,
    );

    public constructor(
        options: StrategyOptionsWithRequest,
        verify: (
            req: Request,
            accessToken: string,
            refreshToken: string,
            profile: Profile,
            done: VerifyCallback,
        ) => void,
    );

    public constructor(
        options: StrategyOptionsWithRequest,
        verify: (
            req: Request,
            accessToken: string,
            refreshToken: string,
            // biome-ignore lint/suspicious/noExplicitAny: we don't know params
            params: any,
            profile: Profile,
            done: VerifyCallback,
        ) => void,
    ) {
        options.authorizationURL = options.authorizationURL || 'https://shikimori.one/oauth/authorize?';
        options.tokenURL = options.tokenURL || 'https://shikimori.one/oauth/token';
        options.scopeSeparator = options.scopeSeparator || '+';
        options.customHeaders = options.customHeaders || {};

        if (!options.customHeaders['User-Agent']) {
            options.customHeaders['User-Agent'] = options.userAgent || 'passport-shikimori';
        }

        super(options, verify);

        this.name = 'shikimori';

        this.clientID = options.clientID;

        this.oauth2.setAuthMethod('Bearer');
        this.oauth2.useAuthorizationHeaderforGET(true);
    }

    protected get oauth2(): OAuth2Strategy['_oauth2'] {
        return this._oauth2;
    }

    public userProfile(token: string, done: (err: Error | null, profile?: Profile) => void): void {
        const headers: Record<string, string> = {
            'Client-ID': this.clientID,
        };

        // @ts-expect-error use internal state because this can change
        if (this.oauth2._useAuthorizationHeaderForGET) {
            headers.Authorization = this.oauth2.buildAuthHeader(token);
            // biome-ignore lint/style/noParameterAssign: be simple
            token = '';
        }

        // @ts-expect-error default pattern in passport use protected methods...
        this.oauth2._request('GET', 'https://shikimori.one/api/users/whoami', headers, '', token, (err, body) => {
            if (err) {
                done(new InternalOAuthError('failed to fetch user profile', err));

                return;
            }

            const whoami = JSON.parse(body as string);

            try {
                done(null, {
                    ...whoami,
                    id: String(whoami.id),
                    provider: 'shikimori',
                });
            } catch (e) {
                done(e as Error);
            }
        });
    }

    public authorizationParams(options: StrategyOptions): Record<string, string> {
        const params: Record<string, string> = {};

        return params;
    }
}
