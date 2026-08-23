import React from 'react';
const LABEL_45685 = 'component_45685';
export function Component45685({ value = 45685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45685, 'data-value': derived.doubled }, children);
}
export default Component45685;
