import React from 'react';
const LABEL_18552 = 'component_18552';
export function Component18552({ value = 18552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18552, 'data-value': derived.doubled }, children);
}
export default Component18552;
