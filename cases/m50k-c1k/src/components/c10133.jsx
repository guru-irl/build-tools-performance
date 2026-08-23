import React from 'react';
const LABEL_10133 = 'component_10133';
export function Component10133({ value = 10133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10133, 'data-value': derived.doubled }, children);
}
export default Component10133;
