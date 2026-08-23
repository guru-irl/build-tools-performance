import React from 'react';
const LABEL_13525 = 'component_13525';
export function Component13525({ value = 13525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13525, 'data-value': derived.doubled }, children);
}
export default Component13525;
