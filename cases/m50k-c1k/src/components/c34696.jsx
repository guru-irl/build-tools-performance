import React from 'react';
const LABEL_34696 = 'component_34696';
export function Component34696({ value = 34696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34696, 'data-value': derived.doubled }, children);
}
export default Component34696;
