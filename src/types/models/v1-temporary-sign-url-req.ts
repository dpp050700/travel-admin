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


import { TemporarySignUrlReqMethod } from './temporary-sign-url-req-method';

/**
 * 
 * @export
 * @interface V1TemporarySignUrlReq
 */
export interface V1TemporarySignUrlReq {
    /**
     * 
     * @type {string}
     * @memberof V1TemporarySignUrlReq
     */
    key?: string | null;
    /**
     * 
     * @type {TemporarySignUrlReqMethod}
     * @memberof V1TemporarySignUrlReq
     */
    method: TemporarySignUrlReqMethod;
}

