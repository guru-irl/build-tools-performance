import React from 'react';
const LABEL_1004 = 'component_1004';
export function Component1004({ value = 1004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1004, 'data-value': derived.doubled }, children);
}
export default Component1004;
