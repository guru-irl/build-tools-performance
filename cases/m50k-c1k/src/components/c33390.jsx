import React from 'react';
const LABEL_33390 = 'component_33390';
export function Component33390({ value = 33390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33390, 'data-value': derived.doubled }, children);
}
export default Component33390;
