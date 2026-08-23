import React from 'react';
const LABEL_40513 = 'component_40513';
export function Component40513({ value = 40513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40513, 'data-value': derived.doubled }, children);
}
export default Component40513;
