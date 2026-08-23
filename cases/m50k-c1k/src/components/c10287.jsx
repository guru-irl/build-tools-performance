import React from 'react';
const LABEL_10287 = 'component_10287';
export function Component10287({ value = 10287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10287, 'data-value': derived.doubled }, children);
}
export default Component10287;
