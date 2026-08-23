import React from 'react';
const LABEL_32390 = 'component_32390';
export function Component32390({ value = 32390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32390, 'data-value': derived.doubled }, children);
}
export default Component32390;
