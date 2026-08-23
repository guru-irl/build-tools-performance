import React from 'react';
const LABEL_34296 = 'component_34296';
export function Component34296({ value = 34296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34296, 'data-value': derived.doubled }, children);
}
export default Component34296;
