import React from 'react';
const LABEL_39504 = 'component_39504';
export function Component39504({ value = 39504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39504, 'data-value': derived.doubled }, children);
}
export default Component39504;
