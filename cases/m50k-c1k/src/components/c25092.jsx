import React from 'react';
const LABEL_25092 = 'component_25092';
export function Component25092({ value = 25092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25092, 'data-value': derived.doubled }, children);
}
export default Component25092;
