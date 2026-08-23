import React from 'react';
const LABEL_1003 = 'component_1003';
export function Component1003({ value = 1003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1003, 'data-value': derived.doubled }, children);
}
export default Component1003;
