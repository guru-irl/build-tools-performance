import React from 'react';
const LABEL_38396 = 'component_38396';
export function Component38396({ value = 38396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38396, 'data-value': derived.doubled }, children);
}
export default Component38396;
