import React from 'react';
const LABEL_629 = 'component_629';
export function Component629({ value = 629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_629, 'data-value': derived.doubled }, children);
}
export default Component629;
