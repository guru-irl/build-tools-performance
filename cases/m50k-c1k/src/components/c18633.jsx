import React from 'react';
const LABEL_18633 = 'component_18633';
export function Component18633({ value = 18633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18633, 'data-value': derived.doubled }, children);
}
export default Component18633;
