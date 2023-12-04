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


import { V1Balance } from './v1-balance';
import { V1Language } from './v1-language';
import { V1UserGender } from './v1-user-gender';

/**
 * 用户信息描述
 * @export
 * @interface V1User
 */
export interface V1User {
    /**
     * 用户 id
     * @type {string}
     * @memberof V1User
     */
    id: string;
    /**
     * 用户角色
     * @type {string}
     * @memberof V1User
     */
    role: string;
    /**
     * 用户邮箱
     * @type {string}
     * @memberof V1User
     */
    email: string;
    /**
     * 用户状态
     * @type {string}
     * @memberof V1User
     */
    status: string;
    /**
     * 上次登录的时间
     * @type {string}
     * @memberof V1User
     */
    lastLogin: string;
    /**
     * 创建时间
     * @type {string}
     * @memberof V1User
     */
    createdAt: string;
    /**
     * 更新时间
     * @type {string}
     * @memberof V1User
     */
    updatedAt: string;
    /**
     * 用户昵称
     * @type {string}
     * @memberof V1User
     */
    nickname?: string | null;
    /**
     * 默认显示时区
     * @type {string}
     * @memberof V1User
     */
    timezone?: string | null;
    /**
     * 用户信息描述
     * @type {string}
     * @memberof V1User
     */
    description?: string | null;
    /**
     * 电话号码
     * @type {string}
     * @memberof V1User
     */
    mobile?: string | null;
    /**
     * 用户头像
     * @type {string}
     * @memberof V1User
     */
    avatar?: string | null;
    /**
     * 生日
     * @type {string}
     * @memberof V1User
     */
    birthday?: string | null;
    /**
     * 数字钱包地址
     * @type {string}
     * @memberof V1User
     */
    digitalWallet?: string | null;
    /**
     * 护照证件号
     * @type {string}
     * @memberof V1User
     */
    passportId?: string | null;
    /**
     * 性别
     * @type {V1UserGender}
     * @memberof V1User
     */
    gender?: V1UserGender;
    /**
     * 语言
     * @type {V1Language}
     * @memberof V1User
     */
    language?: V1Language;
    /**
     * 积分
     * @type {Array<V1Balance>}
     * @memberof V1User
     */
    balance?: Array<V1Balance>;
}


