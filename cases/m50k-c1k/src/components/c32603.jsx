import React from 'react';
const LABEL_32603 = 'component_32603';
export function Component32603({ value = 32603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32603, 'data-value': derived.doubled }, children);
}
export default Component32603;
