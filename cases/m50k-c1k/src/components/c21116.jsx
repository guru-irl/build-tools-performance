import React from 'react';
const LABEL_21116 = 'component_21116';
export function Component21116({ value = 21116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21116, 'data-value': derived.doubled }, children);
}
export default Component21116;
