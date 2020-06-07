export declare const is: {
    string: (val: any) => boolean;
    array: (val: any) => boolean;
    object: (val: any) => boolean;
    function: (val: any) => boolean;
};
/**
 * @description alphabetically sorts array
 * @param {array} arr - array to be sorted alphabetically
 * @return {array} array with sorted keys
 */
export declare function sortAlphabetical(arr: Array<string>): string[];
/**
 * @description special function to sortContributors. since contributors
 * can be an array of strings or objects, this ensures that we treat it
 * properly each time. it skips formatting if array is heterogenous
 */
interface IContributors {
    name?: string;
    email?: string;
    url?: string;
}
export declare function sortContributors(arr: Array<string | IContributors>): (string | IContributors)[];
interface ISortObject {
    [key: string]: string | object;
}
/**
 * @description meta sort function that converts object
 * to array for regular sort functions to consume
 * @param {object} obj - object to be sorted by keys
 * @param {function} sortFn - function that does sorting. it returns a sorted array
 * @return {object} object with sorted keys
 */
export declare function sortObject(obj: ISortObject, sortFn: Function): ISortObject;
interface ISurface {
    [key: string]: string | object;
}
/**
 * @description processes each group
 */
export declare function processGroup(input: any, group: any): ISurface;
/**
 *  @description when converting from oldSurface to sortedSurface,
 *  sorting keys in oldSurface are not always moved over to sortedSurface.
 *  this function fixes that, adding (and sorting) keys that have not been copied
 *  over to the _top_ of sortedSurface
 *  @param {object} oldSurface - old surface that includes all keys
 *  @param {object} sortedSurface - new sorted surface that may not have all keys as oldSurface
 *  @param {function} [sortingFunction] - function to sort all unrecognized keys by. defualts to alphabetical
 *  @return {object} object with all keys intact
 */
export declare function ensureUnecognizedKeys(oldSurface: any, sortedSurface: any, sortingFunction?: Function): any;
export {};
//# sourceMappingURL=util.d.ts.map