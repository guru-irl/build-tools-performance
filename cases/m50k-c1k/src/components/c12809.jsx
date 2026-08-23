import React from 'react';
const LABEL_12809 = 'component_12809';
export function Component12809({ value = 12809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12809, 'data-value': derived.doubled }, children);
}
export default Component12809;
