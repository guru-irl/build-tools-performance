import React from 'react';
const LABEL_23794 = 'component_23794';
export function Component23794({ value = 23794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23794, 'data-value': derived.doubled }, children);
}
export default Component23794;
