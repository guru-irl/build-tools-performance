import React from 'react';
const LABEL_1 = 'component_1';
export function Component1({ value = 1, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1, 'data-value': derived.doubled }, children);
}
export default Component1;
