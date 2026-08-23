import React from 'react';
const LABEL_28553 = 'component_28553';
export function Component28553({ value = 28553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28553, 'data-value': derived.doubled }, children);
}
export default Component28553;
