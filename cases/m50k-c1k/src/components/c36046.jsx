import React from 'react';
const LABEL_36046 = 'component_36046';
export function Component36046({ value = 36046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36046, 'data-value': derived.doubled }, children);
}
export default Component36046;
