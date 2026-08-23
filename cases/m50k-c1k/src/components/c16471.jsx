import React from 'react';
const LABEL_16471 = 'component_16471';
export function Component16471({ value = 16471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16471, 'data-value': derived.doubled }, children);
}
export default Component16471;
