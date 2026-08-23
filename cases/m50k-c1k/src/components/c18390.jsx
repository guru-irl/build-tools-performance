import React from 'react';
const LABEL_18390 = 'component_18390';
export function Component18390({ value = 18390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18390, 'data-value': derived.doubled }, children);
}
export default Component18390;
