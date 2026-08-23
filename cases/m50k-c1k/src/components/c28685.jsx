import React from 'react';
const LABEL_28685 = 'component_28685';
export function Component28685({ value = 28685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28685, 'data-value': derived.doubled }, children);
}
export default Component28685;
