import React from 'react';
const LABEL_34552 = 'component_34552';
export function Component34552({ value = 34552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34552, 'data-value': derived.doubled }, children);
}
export default Component34552;
