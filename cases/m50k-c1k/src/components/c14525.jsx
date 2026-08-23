import React from 'react';
const LABEL_14525 = 'component_14525';
export function Component14525({ value = 14525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14525, 'data-value': derived.doubled }, children);
}
export default Component14525;
