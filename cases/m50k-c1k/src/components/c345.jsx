import React from 'react';
const LABEL_345 = 'component_345';
export function Component345({ value = 345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_345, 'data-value': derived.doubled }, children);
}
export default Component345;
