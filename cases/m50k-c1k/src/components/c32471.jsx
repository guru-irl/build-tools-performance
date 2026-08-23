import React from 'react';
const LABEL_32471 = 'component_32471';
export function Component32471({ value = 32471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32471, 'data-value': derived.doubled }, children);
}
export default Component32471;
