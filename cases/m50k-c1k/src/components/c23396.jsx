import React from 'react';
const LABEL_23396 = 'component_23396';
export function Component23396({ value = 23396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23396, 'data-value': derived.doubled }, children);
}
export default Component23396;
