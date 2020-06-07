/**
 * @description members at the top level
 */
export declare const groupTopLevel: IGroup;
/**
 * @description scripts
 */
export declare const groupScriptsAndConfig: IGroup;
/**
 * @description members for external packages. it _must_ be
 * sorted alphabetically
 */
export declare const groupExternalPackageConfig: IGroup;
/**
 * @description published package metadata
 */
export declare const groupNpmPackageMeta: IGroup;
/**
 * @description members that concern how to access the bundle / type
 * of bundle that is being used
 */
export declare const groupJsEntryPoints: IGroup;
/**
 * @description miscellaneous files / folders
 */
export declare const groupMiscFile: IGroup;
/**
 * @description runtime platform related information
 */
export declare const groupEnginesOsCpu: IGroup;
/**
 * @description publishing information for
 * vscode extension
 */
export declare const groupVsCodeExtensionMeta: IGroup;
/**
 * @description literally all dependencies
 */
export declare const groupDependencyTypes: IGroup;
interface IGroup {
    location: string;
    keys: Array<{
        name: string;
        sortMethod?: Function;
    }>;
}
interface IGroupRoot {
    [key: string]: IGroup;
}
export declare const groupRootCategories: IGroupRoot;
export {};
//# sourceMappingURL=groupCategories.d.ts.map