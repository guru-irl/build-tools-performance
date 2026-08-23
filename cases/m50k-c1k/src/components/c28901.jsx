import React from 'react';
const LABEL_28901 = 'component_28901';
export function Component28901({ value = 28901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28901, 'data-value': derived.doubled }, children);
}
export default Component28901;
