import React from 'react';
const LABEL_28484 = 'component_28484';
export function Component28484({ value = 28484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28484, 'data-value': derived.doubled }, children);
}
export default Component28484;
