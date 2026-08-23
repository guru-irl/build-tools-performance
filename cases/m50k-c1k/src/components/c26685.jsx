import React from 'react';
const LABEL_26685 = 'component_26685';
export function Component26685({ value = 26685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26685, 'data-value': derived.doubled }, children);
}
export default Component26685;
