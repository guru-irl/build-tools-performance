import React from 'react';
const LABEL_36526 = 'component_36526';
export function Component36526({ value = 36526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36526, 'data-value': derived.doubled }, children);
}
export default Component36526;
