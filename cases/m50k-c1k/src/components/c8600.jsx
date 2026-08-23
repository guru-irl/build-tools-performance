import React from 'react';
const LABEL_8600 = 'component_8600';
export function Component8600({ value = 8600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8600, 'data-value': derived.doubled }, children);
}
export default Component8600;
