import React from 'react';
const LABEL_11433 = 'component_11433';
export function Component11433({ value = 11433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11433, 'data-value': derived.doubled }, children);
}
export default Component11433;
