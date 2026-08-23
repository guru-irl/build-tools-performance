import React from 'react';
const LABEL_1243 = 'component_1243';
export function Component1243({ value = 1243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1243, 'data-value': derived.doubled }, children);
}
export default Component1243;
