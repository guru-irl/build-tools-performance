import React from 'react';
const LABEL_28605 = 'component_28605';
export function Component28605({ value = 28605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28605, 'data-value': derived.doubled }, children);
}
export default Component28605;
