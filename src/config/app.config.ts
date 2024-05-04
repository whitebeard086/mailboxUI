export type AppConfig = {
    apiPrefix: string
    authenticatedEntryPath: string
    unAuthenticatedEntryPath: string
}

const appConfig: AppConfig = {
    apiPrefix: 'https://mailboxapi.anovahub.com/api',
    authenticatedEntryPath: '/',
    unAuthenticatedEntryPath: '/login',
}

export default appConfig
