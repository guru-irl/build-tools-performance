import React from 'react';
const LABEL_40046 = 'component_40046';
export function Component40046({ value = 40046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40046, 'data-value': derived.doubled }, children);
}
export default Component40046;
