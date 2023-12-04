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
 * @interface RoomDetailCheckTime
 */
export interface RoomDetailCheckTime {
    /**
     * 入住开始时间
     * @type {string}
     * @memberof RoomDetailCheckTime
     */
    checkinStartTime?: string;
    /**
     * 入住截止时间
     * @type {string}
     * @memberof RoomDetailCheckTime
     */
    checkinEndTime?: string;
    /**
     * 退房截止时间
     * @type {string}
     * @memberof RoomDetailCheckTime
     */
    checkoutEndTime?: string;
}


