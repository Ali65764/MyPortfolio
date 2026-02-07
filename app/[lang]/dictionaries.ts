import 'server-only'

const dictionaries = {
    en: () => import('../dictionaries/en.json').then((module) => module.default),
    az: () => import('../dictionaries/az.json').then((module) => module.default),
    ru: () => import('../dictionaries/ru.json').then((module) => module.default)
}

export const getDictionary = async (locale: 'en' | 'az' | 'ru') =>
    dictionaries[locale]()