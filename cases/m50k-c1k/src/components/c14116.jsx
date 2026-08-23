import React from 'react';
const LABEL_14116 = 'component_14116';
export function Component14116({ value = 14116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14116, 'data-value': derived.doubled }, children);
}
export default Component14116;
