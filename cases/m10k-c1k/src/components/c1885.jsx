import React from 'react';
const LABEL_1885 = 'component_1885';
export function Component1885({ value = 1885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1885, 'data-value': derived.doubled }, children);
}
export default Component1885;
