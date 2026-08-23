import React from 'react';
const LABEL_34629 = 'component_34629';
export function Component34629({ value = 34629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34629, 'data-value': derived.doubled }, children);
}
export default Component34629;
