import React from 'react';
const LABEL_40685 = 'component_40685';
export function Component40685({ value = 40685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40685, 'data-value': derived.doubled }, children);
}
export default Component40685;
