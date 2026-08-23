import React from 'react';
const LABEL_38553 = 'component_38553';
export function Component38553({ value = 38553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38553, 'data-value': derived.doubled }, children);
}
export default Component38553;
