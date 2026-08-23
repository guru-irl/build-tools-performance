import React from 'react';
const LABEL_33923 = 'component_33923';
export function Component33923({ value = 33923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33923, 'data-value': derived.doubled }, children);
}
export default Component33923;
