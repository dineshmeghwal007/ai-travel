/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/discover` | `/(tabs)/mytrip` | `/(tabs)/profile` | `/_sitemap` | `/auth/sign-in` | `/auth/sign-up` | `/create-trip/search-place` | `/discover` | `/mytrip` | `/profile`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
