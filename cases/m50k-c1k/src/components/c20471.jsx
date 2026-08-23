import React from 'react';
const LABEL_20471 = 'component_20471';
export function Component20471({ value = 20471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20471, 'data-value': derived.doubled }, children);
}
export default Component20471;
