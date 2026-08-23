import React from 'react';
const LABEL_45433 = 'component_45433';
export function Component45433({ value = 45433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45433, 'data-value': derived.doubled }, children);
}
export default Component45433;
