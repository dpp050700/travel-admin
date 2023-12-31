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
 * @interface V1AuthRegisterRequest
 */
export interface V1AuthRegisterRequest {
    /**
     * 邮箱
     * @type {string}
     * @memberof V1AuthRegisterRequest
     */
    email: string;
    /**
     * 密码
     * @type {string}
     * @memberof V1AuthRegisterRequest
     */
    password: string;
    /**
     * 验证码
     * @type {string}
     * @memberof V1AuthRegisterRequest
     */
    verifyCode: string;
    /**
     * 密码是否加密
     * @type {boolean}
     * @memberof V1AuthRegisterRequest
     */
    isEncrypted?: boolean;
}


