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


import { OneofEnumMessage } from './oneof-enum-message';
import { UserInfo } from './user-info';

/**
 * 
 * @export
 * @interface PutUserByIdRequest
 */
export interface PutUserByIdRequest {
    /**
     * 
     * @type {string}
     * @memberof PutUserByIdRequest
     */
    org?: string;
    /**
     * 
     * @type {number}
     * @memberof PutUserByIdRequest
     */
    id?: number;
    /**
     * 
     * @type {UserInfo}
     * @memberof PutUserByIdRequest
     */
    userInfo: UserInfo;
    /**
     * The paths to update.
     * @type {string}
     * @memberof PutUserByIdRequest
     */
    updateMask?: string;
    /**
     * 
     * @type {OneofEnumMessage}
     * @memberof PutUserByIdRequest
     */
    oneof?: OneofEnumMessage;
    /**
     * 
     * @type {string}
     * @memberof PutUserByIdRequest
     */
    username?: string;
}

