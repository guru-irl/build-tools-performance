import React from 'react';
const LABEL_3390 = 'component_3390';
export function Component3390({ value = 3390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3390, 'data-value': derived.doubled }, children);
}
export default Component3390;
