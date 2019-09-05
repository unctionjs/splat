import reduceValues from "@unction/reducevalues";
import applicator from "@unction/applicator";

export default function splat<A, B, C> (unction: A): (parameters: Array<B>) => C {
  return reduceValues(applicator)(unction);
}
