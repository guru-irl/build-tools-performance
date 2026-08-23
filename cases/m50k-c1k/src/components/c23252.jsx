import React from 'react';
const LABEL_23252 = 'component_23252';
export function Component23252({ value = 23252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23252, 'data-value': derived.doubled }, children);
}
export default Component23252;
