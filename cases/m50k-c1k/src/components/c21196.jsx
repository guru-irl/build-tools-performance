import React from 'react';
const LABEL_21196 = 'component_21196';
export function Component21196({ value = 21196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21196, 'data-value': derived.doubled }, children);
}
export default Component21196;
