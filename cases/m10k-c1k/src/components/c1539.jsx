import React from 'react';
const LABEL_1539 = 'component_1539';
export function Component1539({ value = 1539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1539, 'data-value': derived.doubled }, children);
}
export default Component1539;
