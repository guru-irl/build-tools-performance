import React from 'react';
const LABEL_29397 = 'component_29397';
export function Component29397({ value = 29397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29397, 'data-value': derived.doubled }, children);
}
export default Component29397;
