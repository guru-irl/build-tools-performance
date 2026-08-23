import React from 'react';
const LABEL_1526 = 'component_1526';
export function Component1526({ value = 1526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1526, 'data-value': derived.doubled }, children);
}
export default Component1526;
