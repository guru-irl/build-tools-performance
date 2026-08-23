import React from 'react';
const LABEL_28046 = 'component_28046';
export function Component28046({ value = 28046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28046, 'data-value': derived.doubled }, children);
}
export default Component28046;
