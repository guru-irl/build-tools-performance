import React from 'react';
const LABEL_1465 = 'component_1465';
export function Component1465({ value = 1465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1465, 'data-value': derived.doubled }, children);
}
export default Component1465;
