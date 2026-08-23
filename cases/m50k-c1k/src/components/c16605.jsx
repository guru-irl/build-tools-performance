import React from 'react';
const LABEL_16605 = 'component_16605';
export function Component16605({ value = 16605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16605, 'data-value': derived.doubled }, children);
}
export default Component16605;
