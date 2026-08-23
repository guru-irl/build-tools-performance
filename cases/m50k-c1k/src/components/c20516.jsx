import React from 'react';
const LABEL_20516 = 'component_20516';
export function Component20516({ value = 20516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20516, 'data-value': derived.doubled }, children);
}
export default Component20516;
