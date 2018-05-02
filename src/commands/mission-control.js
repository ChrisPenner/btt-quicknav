import linkCommand from './web-link-command'

const options = [
    ['digital-ads-client', 'frontend'],

    [ 'advertising', 'backend'],
    [ 'advertising-accounts', 'backend'],
    [ 'adwords-service', 'backend'],
].map(([name, type]) => ({
    label: name,
    value: `https://mission-control-prod.vendasta-internal.com/${type}/${name}`,
}))

export default linkCommand({
    title: 'Mission Control',
    options: options,
})
