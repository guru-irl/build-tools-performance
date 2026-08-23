import React from 'react';
const LABEL_15465 = 'component_15465';
export function Component15465({ value = 15465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15465, 'data-value': derived.doubled }, children);
}
export default Component15465;
