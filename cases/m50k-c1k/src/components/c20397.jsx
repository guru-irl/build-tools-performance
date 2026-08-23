import React from 'react';
const LABEL_20397 = 'component_20397';
export function Component20397({ value = 20397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20397, 'data-value': derived.doubled }, children);
}
export default Component20397;
