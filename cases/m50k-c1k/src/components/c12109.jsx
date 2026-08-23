import React from 'react';
const LABEL_12109 = 'component_12109';
export function Component12109({ value = 12109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12109, 'data-value': derived.doubled }, children);
}
export default Component12109;
