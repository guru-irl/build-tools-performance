import React from 'react';
const LABEL_8521 = 'component_8521';
export function Component8521({ value = 8521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8521, 'data-value': derived.doubled }, children);
}
export default Component8521;
