import React from 'react';
const LABEL_28616 = 'component_28616';
export function Component28616({ value = 28616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28616, 'data-value': derived.doubled }, children);
}
export default Component28616;
