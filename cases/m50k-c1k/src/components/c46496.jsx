import React from 'react';
const LABEL_46496 = 'component_46496';
export function Component46496({ value = 46496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46496, 'data-value': derived.doubled }, children);
}
export default Component46496;
