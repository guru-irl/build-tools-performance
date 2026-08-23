import React from 'react';
const LABEL_41553 = 'component_41553';
export function Component41553({ value = 41553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41553, 'data-value': derived.doubled }, children);
}
export default Component41553;
