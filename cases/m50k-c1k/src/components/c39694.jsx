import React from 'react';
const LABEL_39694 = 'component_39694';
export function Component39694({ value = 39694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39694, 'data-value': derived.doubled }, children);
}
export default Component39694;
