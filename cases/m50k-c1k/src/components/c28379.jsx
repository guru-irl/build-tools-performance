import React from 'react';
const LABEL_28379 = 'component_28379';
export function Component28379({ value = 28379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28379, 'data-value': derived.doubled }, children);
}
export default Component28379;
