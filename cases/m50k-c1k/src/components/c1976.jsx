import React from 'react';
const LABEL_1976 = 'component_1976';
export function Component1976({ value = 1976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1976, 'data-value': derived.doubled }, children);
}
export default Component1976;
