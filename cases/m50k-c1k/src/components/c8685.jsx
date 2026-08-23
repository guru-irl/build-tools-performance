import React from 'react';
const LABEL_8685 = 'component_8685';
export function Component8685({ value = 8685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8685, 'data-value': derived.doubled }, children);
}
export default Component8685;
