import React from 'react';
const LABEL_26650 = 'component_26650';
export function Component26650({ value = 26650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26650, 'data-value': derived.doubled }, children);
}
export default Component26650;
