import React from 'react';
const LABEL_6923 = 'component_6923';
export function Component6923({ value = 6923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6923, 'data-value': derived.doubled }, children);
}
export default Component6923;
