import reduceValues from "@unction/reducevalues";
import applicator from "@unction/applicator";
export default function splat (unction) {
  return reduceValues(applicator)(unction);
}
