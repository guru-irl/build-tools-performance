import React from 'react';
const LABEL_8134 = 'component_8134';
export function Component8134({ value = 8134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8134, 'data-value': derived.doubled }, children);
}
export default Component8134;
