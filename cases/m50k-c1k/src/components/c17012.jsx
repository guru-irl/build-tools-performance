import React from 'react';
const LABEL_17012 = 'component_17012';
export function Component17012({ value = 17012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17012, 'data-value': derived.doubled }, children);
}
export default Component17012;
