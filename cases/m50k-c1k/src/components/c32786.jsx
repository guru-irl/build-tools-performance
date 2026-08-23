import React from 'react';
const LABEL_32786 = 'component_32786';
export function Component32786({ value = 32786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32786, 'data-value': derived.doubled }, children);
}
export default Component32786;
