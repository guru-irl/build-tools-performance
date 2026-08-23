import React from 'react';
const LABEL_13134 = 'component_13134';
export function Component13134({ value = 13134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13134, 'data-value': derived.doubled }, children);
}
export default Component13134;
