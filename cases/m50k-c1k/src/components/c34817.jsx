import React from 'react';
const LABEL_34817 = 'component_34817';
export function Component34817({ value = 34817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34817, 'data-value': derived.doubled }, children);
}
export default Component34817;
