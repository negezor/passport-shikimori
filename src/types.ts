import type { Request } from 'express';
import type { Profile as PassportProfile } from 'passport';
import type { _StrategyOptionsBase, VerifyCallback } from 'passport-oauth2';

export type { Request, VerifyCallback };

export interface StrategyOptions extends _StrategyOptionsBase {
    passReqToCallback?: false;

    userAgent?: string;
}

export interface StrategyOptionsWithRequest extends _StrategyOptionsBase {
    passReqToCallback: true;

    userAgent?: string;
}

export type Profile = PassportProfile & {
    provider: 'shikimori';

    nickname: string;
    email?: string;
    avatar: string;
    image: {
        x160: string;
        x148: string;
        x80: string;
        x64: string;
        x48: string;
        x32: string;
        x16: string;
    };
    last_online_at: string;
    url: string;
    name: string | null;
    sex: string | null;
    website: string | null;
    birth_on: string | null;
    locale: 'ru' | 'en';
}
