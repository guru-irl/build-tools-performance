import React from 'react';
const LABEL_45526 = 'component_45526';
export function Component45526({ value = 45526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45526, 'data-value': derived.doubled }, children);
}
export default Component45526;
