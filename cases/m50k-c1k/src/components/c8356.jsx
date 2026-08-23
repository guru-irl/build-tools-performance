import React from 'react';
const LABEL_8356 = 'component_8356';
export function Component8356({ value = 8356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8356, 'data-value': derived.doubled }, children);
}
export default Component8356;
