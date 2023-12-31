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
 * @interface V1Comment
 */
export interface V1Comment {
    /**
     * 
     * @type {number}
     * @memberof V1Comment
     */
    id?: number;
    /**
     * 创建日期
     * @type {string}
     * @memberof V1Comment
     */
    createdAt?: string;
    /**
     * 修改日期
     * @type {string}
     * @memberof V1Comment
     */
    updatedAt?: string;
    /**
     * 用户昵称
     * @type {string}
     * @memberof V1Comment
     */
    username?: string;
    /**
     * 资源类型
     * @type {string}
     * @memberof V1Comment
     */
    resKind: string;
    /**
     * 资源 id
     * @type {number}
     * @memberof V1Comment
     */
    resId: number;
    /**
     * 评论内容
     * @type {string}
     * @memberof V1Comment
     */
    Comment: string;
}


