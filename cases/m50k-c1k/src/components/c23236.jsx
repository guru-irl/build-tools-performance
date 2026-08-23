import React from 'react';
const LABEL_23236 = 'component_23236';
export function Component23236({ value = 23236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23236, 'data-value': derived.doubled }, children);
}
export default Component23236;
