import React from 'react';
const LABEL_1375 = 'component_1375';
export function Component1375({ value = 1375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1375, 'data-value': derived.doubled }, children);
}
export default Component1375;
