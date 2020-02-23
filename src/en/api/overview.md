---
title: Overview
order: 3
---

A Dinero object is an immutable data structure representing a specific monetary value.
It comes with methods for creating, parsing, manipulating, testing, transforming and formatting them.

A Dinero object has:

- An `amount`, expressed in minor currency units.
- A `currency`, expressed as an [ISO 4217 currency code][wiki:iso4217].
- A `precision`, expressed as an integer, to represent the number of decimal places in the `amount`.
A custom precision is helpful when you want to represent fractional minor currency units (e.g., $10.4545).
You can also use it to represent a currency with a different [exponent][wiki:iso4217:exponent] than `2` (e.g., Iraqi dinar with 1000 fils in 1 dinar (exponent of `3`), Japanese yen with no sub-units (exponent of `0`)).
- An optional `locale` property that affects how output strings are formatted.

Here's an overview of the public API:

- **Access:** [getAmount][dinero:get-amount], [getCurrency][dinero:get-currency], [getLocale][dinero:get-locale] and [getPrecision][dinero:get-precision].
- **Manipulation:** [add][dinero:add], [subtract][dinero:subtract], [multiply][dinero:multiply], [divide][dinero:divide], [percentage][dinero:percentage], [allocate][dinero:allocate] and [convert][dinero:convert].
- **Testing:** [equalsTo][dinero:equals-to], [lessThan][dinero:less-than], [lessThanOrEqual][dinero:less-than-or-equal], [greaterThan][dinero:greater-than], [greaterThanOrEqual][dinero:greater-than-or-equal], [isZero][dinero:is-zero], [isPositive][dinero:is-positive], [isNegative][dinero:is-negative], [hasSubUnits][dinero:has-sub-units], [hasSameCurrency][dinero:has-same-currency] and [hasSameAmount][dinero:has-same-amount].
- **Configuration:** [setLocale][dinero:set-locale].
- **Transformation & formatting:** [toFormat][dinero:to-format], [toUnit][dinero:to-unit], [toRoundedUnit][dinero:to-rounded-unit], [toObject][dinero:to-object], [toJSON][dinero:to-json], [convertPrecision][dinero:convert-precision] and [normalizePrecision][dinero:normalize-precision].

Additionally, Dinero.js lets you set defaults and globals for all subsequently created Dinero objects:

- **Creation:** [defaultAmount][dinero:default-amount], [defaultCurrency][dinero:default-currency] and [defaultPrecision][dinero:default-precision].
- **Settings:** [globalLocale][dinero:global-locale], [globalFormat][dinero:global-format] and [globalRoundingMode][dinero:global-rounding-mode], [globalFormatRoundingMode][dinero:global-format-rounding-mode].
- **Conversion:** [globalExchangeRatesApi.endpoint][dinero:global-exchange-rates-api-endpoint], [globalExchangeRatesApi.propertyPath][dinero:global-exchange-rates-api-property-path] and [globalExchangeRatesApi.headers][dinero:global-exchange-rates-api-headers].

[wiki:iso4217]: https://en.wikipedia.org/wiki/ISO_4217#Active_codes
[wiki:iso4217:exponent]: https://en.wikipedia.org/wiki/ISO_4217#Treatment_of_minor_currency_units_.28the_.22exponent.22.29
[dinero:get-amount]: /api/access/get-amount/
[dinero:get-currency]: /api/access/get-currency/
[dinero:get-locale]: /api/access/get-locale/
[dinero:get-precision]: /api/access/get-precision/
[dinero:add]: /api/manipulation/add/
[dinero:subtract]: /api/manipulation/subtract/
[dinero:multiply]: /api/manipulation/multiply/
[dinero:divide]: /api/manipulation/divide/
[dinero:percentage]: /api/manipulation/percentage/
[dinero:allocate]: /api/manipulation/allocate/
[dinero:convert]: /api/manipulation/convert/
[dinero:equals-to]: /api/testing/equals-to/
[dinero:less-than]: /api/testing/less-than/
[dinero:less-than-or-equal]: /api/testing/less-than-or-equal/
[dinero:greater-than]: /api/testing/greater-than/
[dinero:greater-than-or-equal]: /api/testing/greater-than-or-equal/
[dinero:is-zero]: /api/testing/is-zero/
[dinero:is-positive]: /api/testing/is-positive/
[dinero:is-negative]: /api/testing/is-negative/
[dinero:has-sub-units]: /api/testing/has-sub-units/
[dinero:has-same-currency]: /api/testing/has-same-currency/
[dinero:has-same-amount]: /api/testing/has-same-amount/
[dinero:set-locale]: /api/configuration/set-locale/
[dinero:to-format]: /api/transformation-and-formatting/to-format/
[dinero:to-unit]: /api/transformation-and-formatting/to-unit/
[dinero:to-rounded-unit]: /api/transformation-and-formatting/to-rounded-unit/
[dinero:to-object]: /api/transformation-and-formatting/to-object/
[dinero:to-json]: /api/transformation-and-formatting/to-json/
[dinero:convert-precision]: /api/transformation-and-formatting/convert-precision/
[dinero:normalize-precision]: /api/transformation-and-formatting/normalize-precision/
[dinero:default-amount]: /api/global-and-default-configuration/default-amount/
[dinero:default-currency]: /api/global-and-default-configuration/default-currency/
[dinero:default-precision]: /api/global-and-default-configuration/default-precision/
[dinero:global-locale]: /api/global-and-default-configuration/global-locale/
[dinero:global-format]: /api/global-and-default-configuration/global-format/
[dinero:global-rounding-mode]: /api/global-and-default-configuration/global-rounding-mode/
[dinero:global-format-rounding-mode]: /api/global-and-default-configuration/global-format-rounding-mode/
[dinero:global-exchange-rates-api-endpoint]: /api/global-and-default-configuration/global-exchange-rates-api-endpoint/
[dinero:global-exchange-rates-api-property-path]: /api/global-and-default-configuration/global-exchange-rates-api-property-path/
[dinero:global-exchange-rates-api-headers]: /api/global-and-default-configuration/global-exchange-rates-api-headers/
