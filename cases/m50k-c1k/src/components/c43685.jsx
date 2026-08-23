import React from 'react';
const LABEL_43685 = 'component_43685';
export function Component43685({ value = 43685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43685, 'data-value': derived.doubled }, children);
}
export default Component43685;
