import React from 'react';
const LABEL_20390 = 'component_20390';
export function Component20390({ value = 20390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20390, 'data-value': derived.doubled }, children);
}
export default Component20390;
