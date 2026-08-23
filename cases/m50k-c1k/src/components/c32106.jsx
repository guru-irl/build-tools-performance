import React from 'react';
const LABEL_32106 = 'component_32106';
export function Component32106({ value = 32106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32106, 'data-value': derived.doubled }, children);
}
export default Component32106;
