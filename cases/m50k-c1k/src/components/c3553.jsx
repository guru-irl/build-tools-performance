import React from 'react';
const LABEL_3553 = 'component_3553';
export function Component3553({ value = 3553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3553, 'data-value': derived.doubled }, children);
}
export default Component3553;
