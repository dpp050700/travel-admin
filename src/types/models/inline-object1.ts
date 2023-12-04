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
 * @interface InlineObject1
 */
export interface InlineObject1 {
    /**
     * 订单 id
     * @type {string}
     * @memberof InlineObject1
     */
    orderId: string;
    /**
     * 
     * @type {V1RoomComment}
     * @memberof InlineObject1
     */
    comment: V1RoomComment;
    /**
     * 用户 id
     * @type {string}
     * @memberof InlineObject1
     */
    userId: string;
    /**
     * 评论 id
     * @type {string}
     * @memberof InlineObject1
     */
    commentId: string;
}

