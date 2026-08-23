import React from 'react';
const LABEL_16553 = 'component_16553';
export function Component16553({ value = 16553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16553, 'data-value': derived.doubled }, children);
}
export default Component16553;
