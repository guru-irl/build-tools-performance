import React from 'react';
const LABEL_36122 = 'component_36122';
export function Component36122({ value = 36122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36122, 'data-value': derived.doubled }, children);
}
export default Component36122;
