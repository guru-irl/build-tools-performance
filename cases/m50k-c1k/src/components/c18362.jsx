import React from 'react';
const LABEL_18362 = 'component_18362';
export function Component18362({ value = 18362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18362, 'data-value': derived.doubled }, children);
}
export default Component18362;
