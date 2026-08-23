import React from 'react';
const LABEL_1876 = 'component_1876';
export function Component1876({ value = 1876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1876, 'data-value': derived.doubled }, children);
}
export default Component1876;
