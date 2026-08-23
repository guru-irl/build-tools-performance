import React from 'react';
const LABEL_34389 = 'component_34389';
export function Component34389({ value = 34389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34389, 'data-value': derived.doubled }, children);
}
export default Component34389;
