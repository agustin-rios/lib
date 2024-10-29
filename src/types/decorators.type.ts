/**
 * The default argument type for decorators, represented as a tuple with one or more elements.
 */
export type DefaultDecoratorArgs = unknown[];

/**
 * Represents the arguments that a decorator accepts. If the generic type `T` extends an empty tuple,
 * the default arguments are `[string, number]`. Otherwise, it uses the provided type `T`.
 */
export type DecoratorArgs<
  T extends DefaultDecoratorArgs = DefaultDecoratorArgs,
> = T extends never[] ? [string, number] : T;

/**
 * Function type definition for a decorator. This function can accept multiple arguments based on `TArgs`
 * and has a return type `TReturn` which defaults to `undefined`.
 */
export type DecoratorFn<TArgs extends DecoratorArgs, TReturn = undefined> = (
  ...args: TArgs
) => TReturn;

/**
 * Function type definition for a descriptor. This function accepts arguments of type `TArgs`
 * and has a return type `TReturn` which defaults to `undefined`.
 */
export type DescriptorFn<TArgs, TReturn = undefined> = (args: TArgs) => TReturn;

/**
 * Represents a typed property descriptor for an object. The descriptor is associated with
 * arguments that the decorator accepts, based on type `TArgs`.
 */
export type Descriptor<
  TArgs extends DefaultDecoratorArgs = DefaultDecoratorArgs,
> = TypedPropertyDescriptor<DescriptorValue<TArgs>>;

/**
 * Represents a generated decorator that returns `Descriptor<TArgs>` or `undefined` if not applicable.
 */
export type GeneratedDecorator<
  T = unknown,
  TArgs extends DefaultDecoratorArgs = DefaultDecoratorArgs,
> = (
  target: T,
  key: string,
  descriptor: Descriptor<TArgs>
) => Descriptor<TArgs> | undefined;

/**
 * Represents the target context in which a decorator or function is invoked.
 * This can be used to bind the `this` value and accept additional decorator arguments.
 */
export type ContextTarget<This, TReturn> = (
  this: This,
  ...args: DecoratorArgs
) => TReturn;

/**
 * Represents the value type for a descriptor, which is a function accepting decorator arguments.
 */
export type DescriptorValue<
  TArgs extends DefaultDecoratorArgs = DefaultDecoratorArgs,
> = (...args: DecoratorArgs<TArgs>) => any;
