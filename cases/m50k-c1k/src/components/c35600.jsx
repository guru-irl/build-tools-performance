import React from 'react';
const LABEL_35600 = 'component_35600';
export function Component35600({ value = 35600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35600, 'data-value': derived.doubled }, children);
}
export default Component35600;
