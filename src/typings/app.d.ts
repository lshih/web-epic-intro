/* tslint:disable no-reference */
/// <reference path="../../node_modules/immutable/dist/immutable.d.ts" />

type GUID = string;

type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

type Environment = 'TEST' | 'ETEST' | 'ACCEPTANCE' | 'PRODUCTION';

declare const ENV: Environment;

interface IRecordState<S> extends Immutable.Map<string, any> {
  toObject(): S;
}
