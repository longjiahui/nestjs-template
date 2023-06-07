import { Test, TestingModule } from '@nestjs/testing'
import { RejectFilter } from '@/common/filters/reject.filter'
import * as request from 'supertest'

describe('RejectFilter', () => {
    it('should be defined', () => {
        expect(new RejectFilter()).toBeDefined()
    })

    it('reject-filter e2e', async () => {
        const module: TestingModule = await Test.createTestingModule(
            {},
        ).compile()
        const app = module.createNestApplication()
        app.useGlobalFilters(new RejectFilter())
        await app.init()
        return request(app.getHttpServer())
            .get('/__donotexist__')
            .expect(404)
            .expect({
                code: 404,
                message: 'Cannot GET /__donotexist__',
            })
    })
})
