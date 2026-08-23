import React from 'react';
const LABEL_16513 = 'component_16513';
export function Component16513({ value = 16513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16513, 'data-value': derived.doubled }, children);
}
export default Component16513;
