import React from 'react';
const LABEL_36390 = 'component_36390';
export function Component36390({ value = 36390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36390, 'data-value': derived.doubled }, children);
}
export default Component36390;
