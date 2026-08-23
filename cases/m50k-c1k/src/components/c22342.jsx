import React from 'react';
const LABEL_22342 = 'component_22342';
export function Component22342({ value = 22342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22342, 'data-value': derived.doubled }, children);
}
export default Component22342;
