import React from 'react';
const LABEL_13396 = 'component_13396';
export function Component13396({ value = 13396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13396, 'data-value': derived.doubled }, children);
}
export default Component13396;
