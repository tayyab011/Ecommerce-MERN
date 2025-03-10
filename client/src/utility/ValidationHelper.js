class ValidationHelper {
 IsLater(value) {
    let OnlyLaterRegx =
      /^[A-Za-z\'\s\.\,\-\!\@\#\$\%\^\&\*\(\)\[\]\{\}\:\;\"\<\>\?\/\+\=\_\\\|`\~]+$/;
    return OnlyLaterRegx.test(value);
  }
  IsEmail(value) {
    let EmailRegx = /\S+@\S+\.\S+/;
    return EmailRegx.test(value);
  }
  IsMobile(value) {
    let MobileRegx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
    return MobileRegx.test(value);
  }
 IsNumber(value) {
    let OnlyNumberRegx = /^\d+(\.\d+)?$/;
    return OnlyNumberRegx.test(value);
  }
   IsNull(value) {
    return value == null;
  }
  IsEmpty(value) {
    return value.length === 0;
  }
}
export const { IsLater, IsEmail, IsMobile, IsNumber, IsNull, IsEmpty } =
  new ValidationHelper();
