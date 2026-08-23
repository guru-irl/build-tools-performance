import React from 'react';
const LABEL_32553 = 'component_32553';
export function Component32553({ value = 32553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32553, 'data-value': derived.doubled }, children);
}
export default Component32553;
