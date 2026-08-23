import React from 'react';
const LABEL_397 = 'component_397';
export function Component397({ value = 397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_397, 'data-value': derived.doubled }, children);
}
export default Component397;
