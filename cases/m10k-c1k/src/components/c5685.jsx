import React from 'react';
const LABEL_5685 = 'component_5685';
export function Component5685({ value = 5685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5685, 'data-value': derived.doubled }, children);
}
export default Component5685;
