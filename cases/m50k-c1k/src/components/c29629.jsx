import React from 'react';
const LABEL_29629 = 'component_29629';
export function Component29629({ value = 29629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29629, 'data-value': derived.doubled }, children);
}
export default Component29629;
