import React from 'react';
const LABEL_26491 = 'component_26491';
export function Component26491({ value = 26491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26491, 'data-value': derived.doubled }, children);
}
export default Component26491;
