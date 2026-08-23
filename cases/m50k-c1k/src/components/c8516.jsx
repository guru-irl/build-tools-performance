import React from 'react';
const LABEL_8516 = 'component_8516';
export function Component8516({ value = 8516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8516, 'data-value': derived.doubled }, children);
}
export default Component8516;
