import React from 'react';
const LABEL_26046 = 'component_26046';
export function Component26046({ value = 26046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26046, 'data-value': derived.doubled }, children);
}
export default Component26046;
