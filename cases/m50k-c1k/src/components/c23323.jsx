import React from 'react';
const LABEL_23323 = 'component_23323';
export function Component23323({ value = 23323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23323, 'data-value': derived.doubled }, children);
}
export default Component23323;
