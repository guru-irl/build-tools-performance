import React from 'react';
const LABEL_32608 = 'component_32608';
export function Component32608({ value = 32608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32608, 'data-value': derived.doubled }, children);
}
export default Component32608;
