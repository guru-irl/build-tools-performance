import React from 'react';
const LABEL_23390 = 'component_23390';
export function Component23390({ value = 23390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23390, 'data-value': derived.doubled }, children);
}
export default Component23390;
