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
 * - created: 已创建  - paying: 待付款  - pending: 待入住  - checked_in: 已入住  - canceled: 取消状态  - finished: 已完成，用户主动完成或者订单到期后自动完成  - failed: 订单失败状态
 * @export
 * @enum {string}
 */
export enum V1OrderStatus {
    Created = 'created',
    Paying = 'paying',
    Pending = 'pending',
    CheckedIn = 'checked_in',
    Canceled = 'canceled',
    Finished = 'finished',
    Failed = 'failed'
}



