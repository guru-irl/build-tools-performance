import React from 'react';
const LABEL_10034 = 'component_10034';
export function Component10034({ value = 10034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10034, 'data-value': derived.doubled }, children);
}
export default Component10034;
