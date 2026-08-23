import React from 'react';
const LABEL_10162 = 'component_10162';
export function Component10162({ value = 10162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10162, 'data-value': derived.doubled }, children);
}
export default Component10162;
