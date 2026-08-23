import React from 'react';
const LABEL_21390 = 'component_21390';
export function Component21390({ value = 21390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21390, 'data-value': derived.doubled }, children);
}
export default Component21390;
