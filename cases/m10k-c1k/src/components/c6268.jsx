import React from 'react';
const LABEL_6268 = 'component_6268';
export function Component6268({ value = 6268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6268, 'data-value': derived.doubled }, children);
}
export default Component6268;
