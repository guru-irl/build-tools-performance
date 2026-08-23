import React from 'react';
const LABEL_22629 = 'component_22629';
export function Component22629({ value = 22629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22629, 'data-value': derived.doubled }, children);
}
export default Component22629;
