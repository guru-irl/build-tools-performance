import React from 'react';
const LABEL_10685 = 'component_10685';
export function Component10685({ value = 10685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10685, 'data-value': derived.doubled }, children);
}
export default Component10685;
