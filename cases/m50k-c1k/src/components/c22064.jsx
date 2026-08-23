import React from 'react';
const LABEL_22064 = 'component_22064';
export function Component22064({ value = 22064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22064, 'data-value': derived.doubled }, children);
}
export default Component22064;
