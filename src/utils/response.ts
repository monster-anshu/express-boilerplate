export class HttpResponse {
  public data: unknown;
  public message: string;
  public status: number;
  public isSuccess: boolean;
  constructor(data: unknown = null, message = 'OK', status = 200, isSuccess = true) {
    this.data = data;
    this.message = message;
    this.status = status;
    this.isSuccess = isSuccess;
  }
}

export class HttpException extends HttpResponse {
  constructor(status: number, message: string, isSuccess = false, data: unknown = null) {
    super(data, message, status, isSuccess);
  }
}
