import React from 'react';
const LABEL_12356 = 'component_12356';
export function Component12356({ value = 12356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12356, 'data-value': derived.doubled }, children);
}
export default Component12356;
