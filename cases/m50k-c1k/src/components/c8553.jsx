import React from 'react';
const LABEL_8553 = 'component_8553';
export function Component8553({ value = 8553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8553, 'data-value': derived.doubled }, children);
}
export default Component8553;
