import React from 'react';
const LABEL_35390 = 'component_35390';
export function Component35390({ value = 35390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35390, 'data-value': derived.doubled }, children);
}
export default Component35390;
