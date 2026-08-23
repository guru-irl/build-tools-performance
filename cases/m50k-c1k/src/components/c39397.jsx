import React from 'react';
const LABEL_39397 = 'component_39397';
export function Component39397({ value = 39397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39397, 'data-value': derived.doubled }, children);
}
export default Component39397;
