import React from 'react';
const LABEL_19433 = 'component_19433';
export function Component19433({ value = 19433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19433, 'data-value': derived.doubled }, children);
}
export default Component19433;
