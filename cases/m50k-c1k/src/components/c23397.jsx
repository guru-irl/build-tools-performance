import React from 'react';
const LABEL_23397 = 'component_23397';
export function Component23397({ value = 23397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23397, 'data-value': derived.doubled }, children);
}
export default Component23397;
