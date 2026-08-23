import React from 'react';
const LABEL_1912 = 'component_1912';
export function Component1912({ value = 1912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1912, 'data-value': derived.doubled }, children);
}
export default Component1912;
