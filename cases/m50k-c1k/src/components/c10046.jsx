import React from 'react';
const LABEL_10046 = 'component_10046';
export function Component10046({ value = 10046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10046, 'data-value': derived.doubled }, children);
}
export default Component10046;
