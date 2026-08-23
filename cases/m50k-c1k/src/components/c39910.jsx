import React from 'react';
const LABEL_39910 = 'component_39910';
export function Component39910({ value = 39910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39910, 'data-value': derived.doubled }, children);
}
export default Component39910;
