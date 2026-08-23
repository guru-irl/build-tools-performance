import React from 'react';
const LABEL_22334 = 'component_22334';
export function Component22334({ value = 22334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22334, 'data-value': derived.doubled }, children);
}
export default Component22334;
