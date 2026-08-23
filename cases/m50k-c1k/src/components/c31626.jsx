import React from 'react';
const LABEL_31626 = 'component_31626';
export function Component31626({ value = 31626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31626, 'data-value': derived.doubled }, children);
}
export default Component31626;
