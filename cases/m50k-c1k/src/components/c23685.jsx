import React from 'react';
const LABEL_23685 = 'component_23685';
export function Component23685({ value = 23685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23685, 'data-value': derived.doubled }, children);
}
export default Component23685;
