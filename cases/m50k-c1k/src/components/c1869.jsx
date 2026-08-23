import React from 'react';
const LABEL_1869 = 'component_1869';
export function Component1869({ value = 1869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1869, 'data-value': derived.doubled }, children);
}
export default Component1869;
