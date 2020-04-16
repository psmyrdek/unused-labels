const fakeI18nModule = (key) => `${key} => TRANSLATION`

const translated = fakeI18nModule('website.auth.session_expired')

const month = 'aug'

const translatedMonth = fakeI18nModule(`website.months.${month}`)