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


import { V1RoomComment } from './v1-room-comment';

/**
 * 
 * @export
 * @interface V1RoomCommentFindRsp
 */
export interface V1RoomCommentFindRsp {
    /**
     * 
     * @type {Array<V1RoomComment>}
     * @memberof V1RoomCommentFindRsp
     */
    comments?: Array<V1RoomComment>;
    /**
     * 
     * @type {number}
     * @memberof V1RoomCommentFindRsp
     */
    total?: number;
}


