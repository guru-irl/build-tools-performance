import React from 'react';
const LABEL_11629 = 'component_11629';
export function Component11629({ value = 11629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11629, 'data-value': derived.doubled }, children);
}
export default Component11629;
