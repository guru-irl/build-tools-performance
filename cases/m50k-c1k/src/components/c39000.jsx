import React from 'react';
const LABEL_39000 = 'component_39000';
export function Component39000({ value = 39000, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39000, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39000, 'data-value': derived.doubled }, children);
}
export default Component39000;
