/**
 * terminology
 *
 * a 'group' is a collection of keys that we want to be
 * sorted alphebetically relative to each other. this library
 * only actually sorts groups relative to each other
 *
 * a 'surface' is a platform where sorting occurs. aka
 * an object we add members to. members can be root keys to
 * package.json or members of a nested object in package.json (ex. "eslint": {})
 * usually we create a surface, then add members, and lastly, sort the members
 * within that surface
 */
interface ISortPackageJsonFileAutoReturn {
    packageJsonPath: string;
}
/**
 * @description finds the closes parent package.json file and sorts it
 */
export declare function sortPackageJsonFileAuto(): Promise<ISortPackageJsonFileAutoReturn>;
/**
 * @description sorts a particular package.json file
 * @param {string} packageJsonFile - package.json file to sort. must be an absolute path
 */
export declare function sortPackageJsonFile(packageJsonFile: any): Promise<void>;
/**
 * @description sorts an object that represents a package.json file
 * @param {object} input - object to sort
 * @return {object} the sorted object
 */
export declare function sortPackageJson(input: any): any;
export {};
//# sourceMappingURL=main.d.ts.map