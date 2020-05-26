let api: any = {}
let router: any = []

import * as mainModel from '../page/main/config/index'

router = router.concat(mainModel.router)
api = Object.assign(api, mainModel.api)

export { api, router }
