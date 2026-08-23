import React from 'react';
const LABEL_15264 = 'component_15264';
export function Component15264({ value = 15264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15264, 'data-value': derived.doubled }, children);
}
export default Component15264;
