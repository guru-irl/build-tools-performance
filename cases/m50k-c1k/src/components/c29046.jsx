import React from 'react';
const LABEL_29046 = 'component_29046';
export function Component29046({ value = 29046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29046, 'data-value': derived.doubled }, children);
}
export default Component29046;
