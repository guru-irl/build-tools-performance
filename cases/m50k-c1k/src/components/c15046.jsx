import React from 'react';
const LABEL_15046 = 'component_15046';
export function Component15046({ value = 15046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15046, 'data-value': derived.doubled }, children);
}
export default Component15046;
