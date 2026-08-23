import React from 'react';
const LABEL_3629 = 'component_3629';
export function Component3629({ value = 3629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3629, 'data-value': derived.doubled }, children);
}
export default Component3629;
