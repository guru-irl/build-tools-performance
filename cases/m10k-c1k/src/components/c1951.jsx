import React from 'react';
const LABEL_1951 = 'component_1951';
export function Component1951({ value = 1951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1951, 'data-value': derived.doubled }, children);
}
export default Component1951;
