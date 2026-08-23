import React from 'react';
const LABEL_18046 = 'component_18046';
export function Component18046({ value = 18046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18046, 'data-value': derived.doubled }, children);
}
export default Component18046;
