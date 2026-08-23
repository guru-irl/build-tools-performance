import React from 'react';
const LABEL_6787 = 'component_6787';
export function Component6787({ value = 6787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6787, 'data-value': derived.doubled }, children);
}
export default Component6787;
