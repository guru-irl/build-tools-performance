import React from 'react';
const LABEL_15605 = 'component_15605';
export function Component15605({ value = 15605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15605, 'data-value': derived.doubled }, children);
}
export default Component15605;
