import React from 'react';
const LABEL_1931 = 'component_1931';
export function Component1931({ value = 1931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1931, 'data-value': derived.doubled }, children);
}
export default Component1931;
