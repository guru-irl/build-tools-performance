import React from 'react';
const LABEL_6287 = 'component_6287';
export function Component6287({ value = 6287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6287, 'data-value': derived.doubled }, children);
}
export default Component6287;
