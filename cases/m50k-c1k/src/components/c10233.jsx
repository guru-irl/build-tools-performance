import React from 'react';
const LABEL_10233 = 'component_10233';
export function Component10233({ value = 10233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10233, 'data-value': derived.doubled }, children);
}
export default Component10233;
