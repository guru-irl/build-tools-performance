import React from 'react';
const LABEL_37605 = 'component_37605';
export function Component37605({ value = 37605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37605, 'data-value': derived.doubled }, children);
}
export default Component37605;
