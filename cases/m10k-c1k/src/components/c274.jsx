import React from 'react';
const LABEL_274 = 'component_274';
export function Component274({ value = 274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_274, 'data-value': derived.doubled }, children);
}
export default Component274;
