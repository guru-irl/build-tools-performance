import React from 'react';
const LABEL_44685 = 'component_44685';
export function Component44685({ value = 44685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44685, 'data-value': derived.doubled }, children);
}
export default Component44685;
