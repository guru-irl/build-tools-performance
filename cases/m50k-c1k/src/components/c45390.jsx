import React from 'react';
const LABEL_45390 = 'component_45390';
export function Component45390({ value = 45390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45390, 'data-value': derived.doubled }, children);
}
export default Component45390;
