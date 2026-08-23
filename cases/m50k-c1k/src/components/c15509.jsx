import React from 'react';
const LABEL_15509 = 'component_15509';
export function Component15509({ value = 15509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15509, 'data-value': derived.doubled }, children);
}
export default Component15509;
