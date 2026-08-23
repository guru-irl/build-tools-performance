import React from 'react';
const LABEL_1928 = 'component_1928';
export function Component1928({ value = 1928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1928, 'data-value': derived.doubled }, children);
}
export default Component1928;
