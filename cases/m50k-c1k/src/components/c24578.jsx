import React from 'react';
const LABEL_24578 = 'component_24578';
export function Component24578({ value = 24578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24578, 'data-value': derived.doubled }, children);
}
export default Component24578;
