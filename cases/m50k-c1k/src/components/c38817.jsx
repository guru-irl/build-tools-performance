import React from 'react';
const LABEL_38817 = 'component_38817';
export function Component38817({ value = 38817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38817, 'data-value': derived.doubled }, children);
}
export default Component38817;
