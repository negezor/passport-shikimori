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

• **new Strategy**(`options`, `verify`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`StrategyOptions`](../interfaces/StrategyOptions.md) |
| `verify` | (`accessToken`: `string`, `refreshToken`: `string`, `profile`: [`Profile`](../README.md#profile), `done`: `VerifyCallback`) => `void` |

#### Overrides

OAuth2Strategy.constructor

#### Defined in

[strategy.ts:19](https://github.com/negezor/passport-shikimori/blob/3e17b01/src/strategy.ts#L19)

• **new Strategy**(`options`, `verify`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`StrategyOptions`](../interfaces/StrategyOptions.md) |
| `verify` | (`accessToken`: `string`, `refreshToken`: `string`, `params`: `any`, `profile`: [`Profile`](../README.md#profile), `done`: `VerifyCallback`) => `void` |

#### Overrides

OAuth2Strategy.constructor

#### Defined in

[strategy.ts:29](https://github.com/negezor/passport-shikimori/blob/3e17b01/src/strategy.ts#L29)

• **new Strategy**(`options`, `verify`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`StrategyOptionsWithRequest`](../interfaces/StrategyOptionsWithRequest.md) |
| `verify` | (`req`: `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\>, `accessToken`: `string`, `refreshToken`: `string`, `profile`: [`Profile`](../README.md#profile), `done`: `VerifyCallback`) => `void` |

#### Overrides

OAuth2Strategy.constructor

#### Defined in

[strategy.ts:41](https://github.com/negezor/passport-shikimori/blob/3e17b01/src/strategy.ts#L41)

## Properties

### clientID

• `Protected` **clientID**: `string`

#### Defined in

[strategy.ts:16](https://github.com/negezor/passport-shikimori/blob/3e17b01/src/strategy.ts#L16)

___

### name

• **name**: `string`

#### Overrides

OAuth2Strategy.name

#### Defined in

[strategy.ts:14](https://github.com/negezor/passport-shikimori/blob/3e17b01/src/strategy.ts#L14)

## Accessors

### oauth2

• `Protected` `get` **oauth2**(): `OAuth2`

#### Returns

`OAuth2`

#### Defined in

[strategy.ts:83](https://github.com/negezor/passport-shikimori/blob/3e17b01/src/strategy.ts#L83)

## Methods

### authorizationParams

▸ **authorizationParams**(`options`): `Record`<`string`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`StrategyOptions`](../interfaces/StrategyOptions.md) |

#### Returns

`Record`<`string`, `string`\>

#### Overrides

OAuth2Strategy.authorizationParams

#### Defined in

[strategy.ts:125](https://github.com/negezor/passport-shikimori/blob/3e17b01/src/strategy.ts#L125)

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

[strategy.ts:88](https://github.com/negezor/passport-shikimori/blob/3e17b01/src/strategy.ts#L88)
