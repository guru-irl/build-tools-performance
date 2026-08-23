import React from 'react';
const LABEL_11553 = 'component_11553';
export function Component11553({ value = 11553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11553, 'data-value': derived.doubled }, children);
}
export default Component11553;
