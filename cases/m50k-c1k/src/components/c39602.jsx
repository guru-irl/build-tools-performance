import React from 'react';
const LABEL_39602 = 'component_39602';
export function Component39602({ value = 39602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39602, 'data-value': derived.doubled }, children);
}
export default Component39602;
