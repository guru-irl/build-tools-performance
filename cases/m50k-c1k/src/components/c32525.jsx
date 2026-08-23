import React from 'react';
const LABEL_32525 = 'component_32525';
export function Component32525({ value = 32525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32525, 'data-value': derived.doubled }, children);
}
export default Component32525;
