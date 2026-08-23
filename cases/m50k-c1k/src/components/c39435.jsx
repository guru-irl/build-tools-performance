import React from 'react';
const LABEL_39435 = 'component_39435';
export function Component39435({ value = 39435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39435, 'data-value': derived.doubled }, children);
}
export default Component39435;
