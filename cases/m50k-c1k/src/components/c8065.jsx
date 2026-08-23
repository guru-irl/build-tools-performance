import React from 'react';
const LABEL_8065 = 'component_8065';
export function Component8065({ value = 8065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8065, 'data-value': derived.doubled }, children);
}
export default Component8065;
