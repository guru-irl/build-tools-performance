import React from 'react';
const LABEL_16478 = 'component_16478';
export function Component16478({ value = 16478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16478, 'data-value': derived.doubled }, children);
}
export default Component16478;
