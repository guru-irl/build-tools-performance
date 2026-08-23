import React from 'react';
const LABEL_6116 = 'component_6116';
export function Component6116({ value = 6116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6116, 'data-value': derived.doubled }, children);
}
export default Component6116;
