import React from 'react';
const LABEL_11390 = 'component_11390';
export function Component11390({ value = 11390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11390, 'data-value': derived.doubled }, children);
}
export default Component11390;
