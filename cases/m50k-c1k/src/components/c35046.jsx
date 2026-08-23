import React from 'react';
const LABEL_35046 = 'component_35046';
export function Component35046({ value = 35046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35046, 'data-value': derived.doubled }, children);
}
export default Component35046;
