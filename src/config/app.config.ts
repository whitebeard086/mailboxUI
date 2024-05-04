export type AppConfig = {
    apiPrefix: string
    authenticatedEntryPath: string
    unAuthenticatedEntryPath: string
}

const appConfig: AppConfig = {
    apiPrefix: 'http://mailbox.test/api',
    authenticatedEntryPath: '/',
    unAuthenticatedEntryPath: '/login',
}

export default appConfig
