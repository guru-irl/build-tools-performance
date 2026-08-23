import React from 'react';
const LABEL_39252 = 'component_39252';
export function Component39252({ value = 39252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39252, 'data-value': derived.doubled }, children);
}
export default Component39252;
