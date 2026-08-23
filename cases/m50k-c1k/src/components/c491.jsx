import React from 'react';
const LABEL_491 = 'component_491';
export function Component491({ value = 491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_491, 'data-value': derived.doubled }, children);
}
export default Component491;
