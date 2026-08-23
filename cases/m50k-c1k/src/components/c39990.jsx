import React from 'react';
const LABEL_39990 = 'component_39990';
export function Component39990({ value = 39990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39990, 'data-value': derived.doubled }, children);
}
export default Component39990;
