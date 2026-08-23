import React from 'react';
const LABEL_13390 = 'component_13390';
export function Component13390({ value = 13390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13390, 'data-value': derived.doubled }, children);
}
export default Component13390;
