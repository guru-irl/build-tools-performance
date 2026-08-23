import React from 'react';
const LABEL_18756 = 'component_18756';
export function Component18756({ value = 18756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18756, 'data-value': derived.doubled }, children);
}
export default Component18756;
