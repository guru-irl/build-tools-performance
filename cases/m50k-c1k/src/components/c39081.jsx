import React from 'react';
const LABEL_39081 = 'component_39081';
export function Component39081({ value = 39081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39081, 'data-value': derived.doubled }, children);
}
export default Component39081;
