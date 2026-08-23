import React from 'react';
const LABEL_44390 = 'component_44390';
export function Component44390({ value = 44390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44390, 'data-value': derived.doubled }, children);
}
export default Component44390;
