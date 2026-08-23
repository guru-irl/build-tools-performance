import React from 'react';
const LABEL_24629 = 'component_24629';
export function Component24629({ value = 24629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24629, 'data-value': derived.doubled }, children);
}
export default Component24629;
