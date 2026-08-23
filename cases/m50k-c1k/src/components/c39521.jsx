import React from 'react';
const LABEL_39521 = 'component_39521';
export function Component39521({ value = 39521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39521, 'data-value': derived.doubled }, children);
}
export default Component39521;
