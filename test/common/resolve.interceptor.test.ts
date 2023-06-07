import { of, firstValueFrom } from 'rxjs'
import { ResolveInterceptor } from '@/common/interceptors/resolve.interceptor'

describe('ResolveInterceptor', () => {
    it('should be defined', () => {
        expect(new ResolveInterceptor()).toBeDefined()
    })

    it('should be maped correctly', async () => {
        const interceptor = new ResolveInterceptor()
        const next = { handle: jest.fn().mockReturnValue(of('hello world')) }
        return firstValueFrom(interceptor.intercept(null, next)).then((d) => {
            expect(d).toStrictEqual({
                code: 0,
                data: 'hello world',
            })
        })
    })
})
