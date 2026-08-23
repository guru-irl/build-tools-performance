import React from 'react';
const LABEL_34133 = 'component_34133';
export function Component34133({ value = 34133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34133, 'data-value': derived.doubled }, children);
}
export default Component34133;
