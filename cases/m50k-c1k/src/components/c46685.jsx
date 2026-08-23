import React from 'react';
const LABEL_46685 = 'component_46685';
export function Component46685({ value = 46685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46685, 'data-value': derived.doubled }, children);
}
export default Component46685;
