import React from 'react';
const LABEL_10377 = 'component_10377';
export function Component10377({ value = 10377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10377, 'data-value': derived.doubled }, children);
}
export default Component10377;
