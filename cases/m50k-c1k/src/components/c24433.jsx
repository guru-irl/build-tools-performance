import React from 'react';
const LABEL_24433 = 'component_24433';
export function Component24433({ value = 24433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24433, 'data-value': derived.doubled }, children);
}
export default Component24433;
