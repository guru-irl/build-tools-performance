import React from 'react';
const LABEL_35553 = 'component_35553';
export function Component35553({ value = 35553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35553, 'data-value': derived.doubled }, children);
}
export default Component35553;
