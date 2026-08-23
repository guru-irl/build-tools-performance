import React from 'react';
const LABEL_33521 = 'component_33521';
export function Component33521({ value = 33521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33521, 'data-value': derived.doubled }, children);
}
export default Component33521;
