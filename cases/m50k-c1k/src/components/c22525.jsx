import React from 'react';
const LABEL_22525 = 'component_22525';
export function Component22525({ value = 22525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22525, 'data-value': derived.doubled }, children);
}
export default Component22525;
