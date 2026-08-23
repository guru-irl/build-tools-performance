import React from 'react';
const LABEL_14009 = 'component_14009';
export function Component14009({ value = 14009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14009, 'data-value': derived.doubled }, children);
}
export default Component14009;
