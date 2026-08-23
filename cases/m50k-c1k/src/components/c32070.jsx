import React from 'react';
const LABEL_32070 = 'component_32070';
export function Component32070({ value = 32070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32070, 'data-value': derived.doubled }, children);
}
export default Component32070;
