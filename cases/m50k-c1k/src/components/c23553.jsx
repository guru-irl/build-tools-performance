import React from 'react';
const LABEL_23553 = 'component_23553';
export function Component23553({ value = 23553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23553, 'data-value': derived.doubled }, children);
}
export default Component23553;
