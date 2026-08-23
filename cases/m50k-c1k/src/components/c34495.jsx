import React from 'react';
const LABEL_34495 = 'component_34495';
export function Component34495({ value = 34495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34495, 'data-value': derived.doubled }, children);
}
export default Component34495;
