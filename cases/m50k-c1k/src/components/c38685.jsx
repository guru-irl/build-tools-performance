import React from 'react';
const LABEL_38685 = 'component_38685';
export function Component38685({ value = 38685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38685, 'data-value': derived.doubled }, children);
}
export default Component38685;
