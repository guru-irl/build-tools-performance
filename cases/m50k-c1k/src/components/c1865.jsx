import React from 'react';
const LABEL_1865 = 'component_1865';
export function Component1865({ value = 1865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1865, 'data-value': derived.doubled }, children);
}
export default Component1865;
