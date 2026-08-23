import React from 'react';
const LABEL_16402 = 'component_16402';
export function Component16402({ value = 16402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16402, 'data-value': derived.doubled }, children);
}
export default Component16402;
