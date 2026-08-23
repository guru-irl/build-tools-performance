import React from 'react';
const LABEL_1859 = 'component_1859';
export function Component1859({ value = 1859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1859, 'data-value': derived.doubled }, children);
}
export default Component1859;
