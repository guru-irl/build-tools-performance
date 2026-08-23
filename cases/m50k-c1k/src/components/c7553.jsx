import React from 'react';
const LABEL_7553 = 'component_7553';
export function Component7553({ value = 7553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7553, 'data-value': derived.doubled }, children);
}
export default Component7553;
