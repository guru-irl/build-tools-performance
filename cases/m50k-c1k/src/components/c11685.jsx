import React from 'react';
const LABEL_11685 = 'component_11685';
export function Component11685({ value = 11685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11685, 'data-value': derived.doubled }, children);
}
export default Component11685;
