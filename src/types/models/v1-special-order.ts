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


import { V1OrderStatus } from './v1-order-status';
import { V1SpecialOrderDetail } from './v1-special-order-detail';
import { V1SpecialService } from './v1-special-service';

/**
 * 
 * @export
 * @interface V1SpecialOrder
 */
export interface V1SpecialOrder {
    /**
     * 
     * @type {string}
     * @memberof V1SpecialOrder
     */
    id: string;
    /**
     * 创建日期
     * @type {string}
     * @memberof V1SpecialOrder
     */
    createdAt: string;
    /**
     * 修改日期
     * @type {string}
     * @memberof V1SpecialOrder
     */
    updatedAt: string;
    /**
     * 订单状态
     * @type {V1OrderStatus}
     * @memberof V1SpecialOrder
     */
    status: V1OrderStatus;
    /**
     * 特殊服务 id
     * @type {string}
     * @memberof V1SpecialOrder
     */
    specialServiceId: string;
    /**
     * 所属房间订单 id
     * @type {string}
     * @memberof V1SpecialOrder
     */
    roomOrderId: string;
    /**
     * 订单创建者
     * @type {string}
     * @memberof V1SpecialOrder
     */
    userId: string;
    /**
     * 订单详情
     * @type {V1SpecialOrderDetail}
     * @memberof V1SpecialOrder
     */
    detail?: V1SpecialOrderDetail;
    /**
     * 特殊服务
     * @type {V1SpecialService}
     * @memberof V1SpecialOrder
     */
    specialService?: V1SpecialService;
}


