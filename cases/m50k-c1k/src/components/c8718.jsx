import React from 'react';
const LABEL_8718 = 'component_8718';
export function Component8718({ value = 8718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8718, 'data-value': derived.doubled }, children);
}
export default Component8718;
