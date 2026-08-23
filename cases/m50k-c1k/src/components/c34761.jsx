import React from 'react';
const LABEL_34761 = 'component_34761';
export function Component34761({ value = 34761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34761, 'data-value': derived.doubled }, children);
}
export default Component34761;
