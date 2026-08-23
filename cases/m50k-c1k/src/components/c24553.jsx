import React from 'react';
const LABEL_24553 = 'component_24553';
export function Component24553({ value = 24553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24553, 'data-value': derived.doubled }, children);
}
export default Component24553;
