import React from 'react';
const LABEL_8525 = 'component_8525';
export function Component8525({ value = 8525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8525, 'data-value': derived.doubled }, children);
}
export default Component8525;
