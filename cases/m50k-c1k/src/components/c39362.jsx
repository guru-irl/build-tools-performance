import React from 'react';
const LABEL_39362 = 'component_39362';
export function Component39362({ value = 39362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39362, 'data-value': derived.doubled }, children);
}
export default Component39362;
