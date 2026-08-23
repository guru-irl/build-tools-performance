import React from 'react';
const LABEL_10858 = 'component_10858';
export function Component10858({ value = 10858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10858, 'data-value': derived.doubled }, children);
}
export default Component10858;
