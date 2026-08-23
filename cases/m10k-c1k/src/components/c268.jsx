import React from 'react';
const LABEL_268 = 'component_268';
export function Component268({ value = 268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_268, 'data-value': derived.doubled }, children);
}
export default Component268;
