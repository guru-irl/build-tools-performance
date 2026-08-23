import React from 'react';
const LABEL_5356 = 'component_5356';
export function Component5356({ value = 5356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5356, 'data-value': derived.doubled }, children);
}
export default Component5356;
