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


import { V1Bookmark } from './v1-bookmark';

/**
 * 
 * @export
 * @interface V1BookmarkFindRsp
 */
export interface V1BookmarkFindRsp {
    /**
     * 
     * @type {Array<V1Bookmark>}
     * @memberof V1BookmarkFindRsp
     */
    bookmarks?: Array<V1Bookmark>;
    /**
     * 
     * @type {number}
     * @memberof V1BookmarkFindRsp
     */
    total?: number;
}


