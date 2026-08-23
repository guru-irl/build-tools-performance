import React from 'react';
const LABEL_1870 = 'component_1870';
export function Component1870({ value = 1870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1870, 'data-value': derived.doubled }, children);
}
export default Component1870;
