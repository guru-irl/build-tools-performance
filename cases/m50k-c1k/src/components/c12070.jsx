import React from 'react';
const LABEL_12070 = 'component_12070';
export function Component12070({ value = 12070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12070, 'data-value': derived.doubled }, children);
}
export default Component12070;
