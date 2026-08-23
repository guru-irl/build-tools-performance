import React from 'react';
const LABEL_22923 = 'component_22923';
export function Component22923({ value = 22923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22923, 'data-value': derived.doubled }, children);
}
export default Component22923;
