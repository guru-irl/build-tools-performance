import React from 'react';
const LABEL_16578 = 'component_16578';
export function Component16578({ value = 16578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16578, 'data-value': derived.doubled }, children);
}
export default Component16578;
