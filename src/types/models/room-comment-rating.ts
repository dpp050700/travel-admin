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
 * 评级
 * @export
 * @interface RoomCommentRating
 */
export interface RoomCommentRating {
    /**
     * 风景
     * @type {number}
     * @memberof RoomCommentRating
     */
    scene?: number | null;
    /**
     * 饮食
     * @type {number}
     * @memberof RoomCommentRating
     */
    food?: number | null;
    /**
     * 基础设施
     * @type {number}
     * @memberof RoomCommentRating
     */
    infrastructure?: number | null;
    /**
     * 服务
     * @type {number}
     * @memberof RoomCommentRating
     */
    service?: number | null;
    /**
     * 总体评分
     * @type {number}
     * @memberof RoomCommentRating
     */
    total?: number | null;
}

