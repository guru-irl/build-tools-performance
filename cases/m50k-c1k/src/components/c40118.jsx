import React from 'react';
const LABEL_40118 = 'component_40118';
export function Component40118({ value = 40118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40118, 'data-value': derived.doubled }, children);
}
export default Component40118;
