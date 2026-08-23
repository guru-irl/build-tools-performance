import React from 'react';
const LABEL_16516 = 'component_16516';
export function Component16516({ value = 16516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16516, 'data-value': derived.doubled }, children);
}
export default Component16516;
