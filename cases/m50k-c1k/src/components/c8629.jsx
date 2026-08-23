import React from 'react';
const LABEL_8629 = 'component_8629';
export function Component8629({ value = 8629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8629, 'data-value': derived.doubled }, children);
}
export default Component8629;
