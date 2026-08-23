import React from 'react';
const LABEL_1193 = 'component_1193';
export function Component1193({ value = 1193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1193, 'data-value': derived.doubled }, children);
}
export default Component1193;
