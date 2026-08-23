import React from 'react';
const LABEL_2397 = 'component_2397';
export function Component2397({ value = 2397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2397, 'data-value': derived.doubled }, children);
}
export default Component2397;
