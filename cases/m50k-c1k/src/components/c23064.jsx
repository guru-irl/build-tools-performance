import React from 'react';
const LABEL_23064 = 'component_23064';
export function Component23064({ value = 23064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23064, 'data-value': derived.doubled }, children);
}
export default Component23064;
