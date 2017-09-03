// tslint:disable:no-console

export abstract class MessageSystem {
  public static log(message?: any, ...optionalParams: any[]) {
    if (ENV === 'TEST' || ENV === 'ETEST') {
      console.log(message, ...optionalParams);
    }
  }

  public static warn(message?: any, ...optionalParams: any[]) {
    if (ENV === 'TEST' || ENV === 'ETEST') {
      console.warn(message, ...optionalParams);
    }
  }

  public static error(message?: any, ...optionalParams: any[]) {
    if (ENV === 'TEST' || ENV === 'ETEST') {
      console.error(message, ...optionalParams);
    }
  }
}
