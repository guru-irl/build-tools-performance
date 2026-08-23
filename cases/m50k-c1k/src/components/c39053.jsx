import React from 'react';
const LABEL_39053 = 'component_39053';
export function Component39053({ value = 39053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39053, 'data-value': derived.doubled }, children);
}
export default Component39053;
