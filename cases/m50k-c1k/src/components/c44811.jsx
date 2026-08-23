import React from 'react';
const LABEL_44811 = 'component_44811';
export function Component44811({ value = 44811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44811, 'data-value': derived.doubled }, children);
}
export default Component44811;
