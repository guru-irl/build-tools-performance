import React from 'react';
const LABEL_14519 = 'component_14519';
export function Component14519({ value = 14519, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14519, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14519, 'data-value': derived.doubled }, children);
}
export default Component14519;
