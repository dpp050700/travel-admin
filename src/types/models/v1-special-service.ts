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


import { V1SpecialServiceDetail } from './v1-special-service-detail';
import { V1SpecialServiceType } from './v1-special-service-type';

/**
 * 房间特殊服务
 * @export
 * @interface V1SpecialService
 */
export interface V1SpecialService {
    /**
     * 
     * @type {string}
     * @memberof V1SpecialService
     */
    id: string;
    /**
     * 创建日期
     * @type {string}
     * @memberof V1SpecialService
     */
    createdAt: string;
    /**
     * 修改日期
     * @type {string}
     * @memberof V1SpecialService
     */
    updatedAt: string;
    /**
     * 服务名字
     * @type {string}
     * @memberof V1SpecialService
     */
    name: string | null;
    /**
     * 服务类型
     * @type {V1SpecialServiceType}
     * @memberof V1SpecialService
     */
    type?: V1SpecialServiceType;
    /**
     * 服务原价
     * @type {number}
     * @memberof V1SpecialService
     */
    price?: number | null;
    /**
     * 缩略图
     * @type {string}
     * @memberof V1SpecialService
     */
    thumbnail?: string | null;
    /**
     * 服务图片
     * @type {Array<string>}
     * @memberof V1SpecialService
     */
    images?: Array<string>;
    /**
     * 服务介绍
     * @type {string}
     * @memberof V1SpecialService
     */
    description?: string | null;
    /**
     * 
     * @type {V1SpecialServiceDetail}
     * @memberof V1SpecialService
     */
    detail?: V1SpecialServiceDetail;
}


