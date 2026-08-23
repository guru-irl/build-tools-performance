import React from 'react';
const LABEL_21616 = 'component_21616';
export function Component21616({ value = 21616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21616, 'data-value': derived.doubled }, children);
}
export default Component21616;
