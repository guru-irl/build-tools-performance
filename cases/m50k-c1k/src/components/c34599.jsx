import React from 'react';
const LABEL_34599 = 'component_34599';
export function Component34599({ value = 34599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34599, 'data-value': derived.doubled }, children);
}
export default Component34599;
