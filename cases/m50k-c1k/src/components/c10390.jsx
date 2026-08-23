import React from 'react';
const LABEL_10390 = 'component_10390';
export function Component10390({ value = 10390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10390, 'data-value': derived.doubled }, children);
}
export default Component10390;
