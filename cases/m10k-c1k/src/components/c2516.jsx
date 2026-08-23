import React from 'react';
const LABEL_2516 = 'component_2516';
export function Component2516({ value = 2516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2516, 'data-value': derived.doubled }, children);
}
export default Component2516;
