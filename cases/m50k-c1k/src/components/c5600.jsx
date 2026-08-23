import React from 'react';
const LABEL_5600 = 'component_5600';
export function Component5600({ value = 5600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5600, 'data-value': derived.doubled }, children);
}
export default Component5600;
