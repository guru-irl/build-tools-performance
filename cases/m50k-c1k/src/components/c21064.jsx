import React from 'react';
const LABEL_21064 = 'component_21064';
export function Component21064({ value = 21064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21064, 'data-value': derived.doubled }, children);
}
export default Component21064;
