import React from 'react';
const LABEL_29553 = 'component_29553';
export function Component29553({ value = 29553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29553, 'data-value': derived.doubled }, children);
}
export default Component29553;
