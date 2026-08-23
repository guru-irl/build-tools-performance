import React from 'react';
const LABEL_43553 = 'component_43553';
export function Component43553({ value = 43553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43553, 'data-value': derived.doubled }, children);
}
export default Component43553;
