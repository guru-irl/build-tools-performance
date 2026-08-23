import React from 'react';
const LABEL_4433 = 'component_4433';
export function Component4433({ value = 4433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4433, 'data-value': derived.doubled }, children);
}
export default Component4433;
