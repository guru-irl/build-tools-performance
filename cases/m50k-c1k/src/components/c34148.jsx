import React from 'react';
const LABEL_34148 = 'component_34148';
export function Component34148({ value = 34148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34148, 'data-value': derived.doubled }, children);
}
export default Component34148;
