import React from 'react';
const LABEL_30526 = 'component_30526';
export function Component30526({ value = 30526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30526, 'data-value': derived.doubled }, children);
}
export default Component30526;
