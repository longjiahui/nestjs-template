import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
    HttpStatus,
} from '@nestjs/common'
import { Response } from 'express'

@Catch()
export class RejectFilter<T> implements ExceptionFilter {
    catch(exception: T, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const response = ctx.getResponse<Response>()
        let code = HttpStatus.INTERNAL_SERVER_ERROR
        let message = ''
        if (exception instanceof HttpException) {
            code = exception.getStatus()
        }
        if (exception instanceof Error) {
            message = exception.message
        }
        response.status(code).json({
            code: code,
            message,
        })
    }
}
