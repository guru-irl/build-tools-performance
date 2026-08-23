import React from 'react';
const LABEL_1002 = 'component_1002';
export function Component1002({ value = 1002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1002, 'data-value': derived.doubled }, children);
}
export default Component1002;
