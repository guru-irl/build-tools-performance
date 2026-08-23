import React from 'react';
const LABEL_12833 = 'component_12833';
export function Component12833({ value = 12833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12833, 'data-value': derived.doubled }, children);
}
export default Component12833;
