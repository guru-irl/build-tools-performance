import React from 'react';
const LABEL_36685 = 'component_36685';
export function Component36685({ value = 36685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36685, 'data-value': derived.doubled }, children);
}
export default Component36685;
