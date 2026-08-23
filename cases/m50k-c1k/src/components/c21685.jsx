import React from 'react';
const LABEL_21685 = 'component_21685';
export function Component21685({ value = 21685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21685, 'data-value': derived.doubled }, children);
}
export default Component21685;
