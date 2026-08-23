import React from 'react';
const LABEL_37516 = 'component_37516';
export function Component37516({ value = 37516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37516, 'data-value': derived.doubled }, children);
}
export default Component37516;
