import React from 'react';
const LABEL_7433 = 'component_7433';
export function Component7433({ value = 7433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7433, 'data-value': derived.doubled }, children);
}
export default Component7433;
