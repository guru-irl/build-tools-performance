import React from 'react';
const LABEL_32685 = 'component_32685';
export function Component32685({ value = 32685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32685, 'data-value': derived.doubled }, children);
}
export default Component32685;
