import React from 'react';
const LABEL_21413 = 'component_21413';
export function Component21413({ value = 21413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21413, 'data-value': derived.doubled }, children);
}
export default Component21413;
