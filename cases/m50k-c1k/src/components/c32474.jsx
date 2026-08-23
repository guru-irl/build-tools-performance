import React from 'react';
const LABEL_32474 = 'component_32474';
export function Component32474({ value = 32474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32474, 'data-value': derived.doubled }, children);
}
export default Component32474;
