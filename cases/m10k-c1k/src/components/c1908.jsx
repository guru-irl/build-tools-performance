import React from 'react';
const LABEL_1908 = 'component_1908';
export function Component1908({ value = 1908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1908, 'data-value': derived.doubled }, children);
}
export default Component1908;
