import React from 'react';
const LABEL_1397 = 'component_1397';
export function Component1397({ value = 1397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1397, 'data-value': derived.doubled }, children);
}
export default Component1397;
