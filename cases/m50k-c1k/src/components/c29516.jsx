import React from 'react';
const LABEL_29516 = 'component_29516';
export function Component29516({ value = 29516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29516, 'data-value': derived.doubled }, children);
}
export default Component29516;
