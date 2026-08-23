import React from 'react';
const LABEL_8081 = 'component_8081';
export function Component8081({ value = 8081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8081, 'data-value': derived.doubled }, children);
}
export default Component8081;
