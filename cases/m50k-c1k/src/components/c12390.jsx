import React from 'react';
const LABEL_12390 = 'component_12390';
export function Component12390({ value = 12390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12390, 'data-value': derived.doubled }, children);
}
export default Component12390;
