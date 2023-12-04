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


import { V1BookmarkFindReq } from './v1-bookmark-find-req';
import { V1UserDetailReq } from './v1-user-detail-req';
import { V1UserFindReq } from './v1-user-find-req';

/**
 * 
 * @export
 * @interface V1Query
 */
export interface V1Query {
    /**
     * 
     * @type {V1BookmarkFindReq}
     * @memberof V1Query
     */
    bookmark?: V1BookmarkFindReq;
    /**
     * 
     * @type {V1UserDetailReq}
     * @memberof V1Query
     */
    user?: V1UserDetailReq;
    /**
     * 
     * @type {V1UserFindReq}
     * @memberof V1Query
     */
    users?: V1UserFindReq;
}

