// tslint:disable
/**
 * openapi
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface ResetPasswordReq
 */
export interface ResetPasswordReq {
    /**
     * 邮箱
     * @type {string}
     * @memberof ResetPasswordReq
     */
    email?: string;
    /**
     * 密码
     * @type {string}
     * @memberof ResetPasswordReq
     */
    password?: string;
    /**
     * 验证码
     * @type {string}
     * @memberof ResetPasswordReq
     */
    verifyCode?: string;
}


