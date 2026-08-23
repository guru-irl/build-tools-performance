import React from 'react';
const LABEL_39608 = 'component_39608';
export function Component39608({ value = 39608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39608, 'data-value': derived.doubled }, children);
}
export default Component39608;
