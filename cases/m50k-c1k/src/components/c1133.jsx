import React from 'react';
const LABEL_1133 = 'component_1133';
export function Component1133({ value = 1133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1133, 'data-value': derived.doubled }, children);
}
export default Component1133;
