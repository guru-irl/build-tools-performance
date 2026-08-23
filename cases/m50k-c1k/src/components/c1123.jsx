import React from 'react';
const LABEL_1123 = 'component_1123';
export function Component1123({ value = 1123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1123, 'data-value': derived.doubled }, children);
}
export default Component1123;
