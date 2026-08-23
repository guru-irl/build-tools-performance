import React from 'react';
const LABEL_12553 = 'component_12553';
export function Component12553({ value = 12553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12553, 'data-value': derived.doubled }, children);
}
export default Component12553;
