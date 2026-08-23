import React from 'react';
const LABEL_20608 = 'component_20608';
export function Component20608({ value = 20608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20608, 'data-value': derived.doubled }, children);
}
export default Component20608;
