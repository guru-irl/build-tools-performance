import React from 'react';
const LABEL_39868 = 'component_39868';
export function Component39868({ value = 39868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39868, 'data-value': derived.doubled }, children);
}
export default Component39868;
