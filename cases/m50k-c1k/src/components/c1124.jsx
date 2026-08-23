import React from 'react';
const LABEL_1124 = 'component_1124';
export function Component1124({ value = 1124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1124, 'data-value': derived.doubled }, children);
}
export default Component1124;
