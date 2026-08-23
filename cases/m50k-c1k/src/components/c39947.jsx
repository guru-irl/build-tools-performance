import React from 'react';
const LABEL_39947 = 'component_39947';
export function Component39947({ value = 39947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39947, 'data-value': derived.doubled }, children);
}
export default Component39947;
