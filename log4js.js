import log4js from 'log4js'

log4js.configure('./log4js.json')

const logger= log4js.getLogger('agentLog')
logger.info('log4js init finished!')

export default logger