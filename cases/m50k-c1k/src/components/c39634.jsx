import React from 'react';
const LABEL_39634 = 'component_39634';
export function Component39634({ value = 39634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39634, 'data-value': derived.doubled }, children);
}
export default Component39634;
