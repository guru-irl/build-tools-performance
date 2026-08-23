import React from 'react';
const LABEL_40354 = 'component_40354';
export function Component40354({ value = 40354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40354, 'data-value': derived.doubled }, children);
}
export default Component40354;
