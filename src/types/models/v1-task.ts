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


import { V1TaskStatus } from './v1-task-status';

/**
 * 
 * @export
 * @interface V1Task
 */
export interface V1Task {
    /**
     * 
     * @type {string}
     * @memberof V1Task
     */
    id: string;
    /**
     * 任务队列
     * @type {string}
     * @memberof V1Task
     */
    queue: string;
    /**
     * 任务参数
     * @type {string}
     * @memberof V1Task
     */
    args?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Task
     */
    userId?: string | null;
    /**
     * 错误详情
     * @type {string}
     * @memberof V1Task
     */
    errDetail?: string | null;
    /**
     * 
     * @type {V1TaskStatus}
     * @memberof V1Task
     */
    status?: V1TaskStatus;
    /**
     * 
     * @type {number}
     * @memberof V1Task
     */
    remainingAttempts?: number;
    /**
     * 
     * @type {string}
     * @memberof V1Task
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Task
     */
    updatedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Task
     */
    runAt?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Task
     */
    finishedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof V1Task
     */
    timeoutAt?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Task
     */
    expiredAt?: string;
}


