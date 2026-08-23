import React from 'react';
const LABEL_15553 = 'component_15553';
export function Component15553({ value = 15553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15553, 'data-value': derived.doubled }, children);
}
export default Component15553;
