import React from 'react';
const LABEL_29284 = 'component_29284';
export function Component29284({ value = 29284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29284, 'data-value': derived.doubled }, children);
}
export default Component29284;
