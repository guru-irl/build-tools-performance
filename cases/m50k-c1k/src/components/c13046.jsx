import React from 'react';
const LABEL_13046 = 'component_13046';
export function Component13046({ value = 13046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13046, 'data-value': derived.doubled }, children);
}
export default Component13046;
