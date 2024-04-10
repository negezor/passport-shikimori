[passport-shikimori](../README.md) / Strategy

# Class: Strategy

## Hierarchy

- `OAuth2Strategy`

  ↳ **`Strategy`**

## Table of contents

### Constructors

- [constructor](Strategy.md#constructor)

### Properties

- [clientID](Strategy.md#clientid)
- [name](Strategy.md#name)

### Accessors

- [oauth2](Strategy.md#oauth2)

### Methods

- [authorizationParams](Strategy.md#authorizationparams)
- [userProfile](Strategy.md#userprofile)

## Constructors

### constructor

• **new Strategy**(`options`, `verify`): [`Strategy`](Strategy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`StrategyOptions`](../interfaces/StrategyOptions.md) |
| `verify` | (`accessToken`: `string`, `refreshToken`: `string`, `profile`: [`Profile`](../README.md#profile), `done`: `VerifyCallback`) => `void` |

#### Returns

[`Strategy`](Strategy.md)

#### Overrides

OAuth2Strategy.constructor

#### Defined in

[strategy.ts:13](https://github.com/negezor/passport-shikimori/blob/673d3f51c8ebaa991cdb8bfc7e5c9acbe5d13cef/src/strategy.ts#L13)

• **new Strategy**(`options`, `verify`): [`Strategy`](Strategy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`StrategyOptions`](../interfaces/StrategyOptions.md) |
| `verify` | (`accessToken`: `string`, `refreshToken`: `string`, `params`: `any`, `profile`: [`Profile`](../README.md#profile), `done`: `VerifyCallback`) => `void` |

#### Returns

[`Strategy`](Strategy.md)

#### Overrides

OAuth2Strategy.constructor

#### Defined in

[strategy.ts:18](https://github.com/negezor/passport-shikimori/blob/673d3f51c8ebaa991cdb8bfc7e5c9acbe5d13cef/src/strategy.ts#L18)

• **new Strategy**(`options`, `verify`): [`Strategy`](Strategy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`StrategyOptionsWithRequest`](../interfaces/StrategyOptionsWithRequest.md) |
| `verify` | (`req`: `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\>, `accessToken`: `string`, `refreshToken`: `string`, `profile`: [`Profile`](../README.md#profile), `done`: `VerifyCallback`) => `void` |

#### Returns

[`Strategy`](Strategy.md)

#### Overrides

OAuth2Strategy.constructor

#### Defined in

[strategy.ts:30](https://github.com/negezor/passport-shikimori/blob/673d3f51c8ebaa991cdb8bfc7e5c9acbe5d13cef/src/strategy.ts#L30)

## Properties

### clientID

• `Protected` **clientID**: `string`

#### Defined in

[strategy.ts:10](https://github.com/negezor/passport-shikimori/blob/673d3f51c8ebaa991cdb8bfc7e5c9acbe5d13cef/src/strategy.ts#L10)

___

### name

• **name**: `string`

#### Overrides

OAuth2Strategy.name

#### Defined in

[strategy.ts:8](https://github.com/negezor/passport-shikimori/blob/673d3f51c8ebaa991cdb8bfc7e5c9acbe5d13cef/src/strategy.ts#L8)

## Accessors

### oauth2

• `get` **oauth2**(): `OAuth2`

#### Returns

`OAuth2`

#### Defined in

[strategy.ts:72](https://github.com/negezor/passport-shikimori/blob/673d3f51c8ebaa991cdb8bfc7e5c9acbe5d13cef/src/strategy.ts#L72)

## Methods

### authorizationParams

▸ **authorizationParams**(`options`): `Record`\<`string`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`StrategyOptions`](../interfaces/StrategyOptions.md) |

#### Returns

`Record`\<`string`, `string`\>

#### Overrides

OAuth2Strategy.authorizationParams

#### Defined in

[strategy.ts:110](https://github.com/negezor/passport-shikimori/blob/673d3f51c8ebaa991cdb8bfc7e5c9acbe5d13cef/src/strategy.ts#L110)

___

### userProfile

▸ **userProfile**(`token`, `done`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `done` | (`err`: ``null`` \| `Error`, `profile?`: [`Profile`](../README.md#profile)) => `void` |

#### Returns

`void`

#### Overrides

OAuth2Strategy.userProfile

#### Defined in

[strategy.ts:76](https://github.com/negezor/passport-shikimori/blob/673d3f51c8ebaa991cdb8bfc7e5c9acbe5d13cef/src/strategy.ts#L76)
