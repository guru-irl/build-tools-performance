import React from 'react';
const LABEL_33268 = 'component_33268';
export function Component33268({ value = 33268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33268, 'data-value': derived.doubled }, children);
}
export default Component33268;
