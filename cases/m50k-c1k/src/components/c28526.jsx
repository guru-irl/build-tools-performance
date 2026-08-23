import React from 'react';
const LABEL_28526 = 'component_28526';
export function Component28526({ value = 28526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28526, 'data-value': derived.doubled }, children);
}
export default Component28526;
