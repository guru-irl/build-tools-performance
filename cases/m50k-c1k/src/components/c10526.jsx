import React from 'react';
const LABEL_10526 = 'component_10526';
export function Component10526({ value = 10526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10526, 'data-value': derived.doubled }, children);
}
export default Component10526;
