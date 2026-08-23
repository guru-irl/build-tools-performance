import React from 'react';
const LABEL_31433 = 'component_31433';
export function Component31433({ value = 31433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31433, 'data-value': derived.doubled }, children);
}
export default Component31433;
