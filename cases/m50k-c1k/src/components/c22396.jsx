import React from 'react';
const LABEL_22396 = 'component_22396';
export function Component22396({ value = 22396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22396, 'data-value': derived.doubled }, children);
}
export default Component22396;
