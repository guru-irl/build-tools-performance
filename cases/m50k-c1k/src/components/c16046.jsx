import React from 'react';
const LABEL_16046 = 'component_16046';
export function Component16046({ value = 16046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16046, 'data-value': derived.doubled }, children);
}
export default Component16046;
