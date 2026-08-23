import React from 'react';
const LABEL_1858 = 'component_1858';
export function Component1858({ value = 1858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1858, 'data-value': derived.doubled }, children);
}
export default Component1858;
