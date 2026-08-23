import React from 'react';
const LABEL_18396 = 'component_18396';
export function Component18396({ value = 18396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18396, 'data-value': derived.doubled }, children);
}
export default Component18396;
