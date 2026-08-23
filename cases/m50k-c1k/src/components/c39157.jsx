import React from 'react';
const LABEL_39157 = 'component_39157';
export function Component39157({ value = 39157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39157, 'data-value': derived.doubled }, children);
}
export default Component39157;
