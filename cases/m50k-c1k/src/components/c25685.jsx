import React from 'react';
const LABEL_25685 = 'component_25685';
export function Component25685({ value = 25685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25685, 'data-value': derived.doubled }, children);
}
export default Component25685;
