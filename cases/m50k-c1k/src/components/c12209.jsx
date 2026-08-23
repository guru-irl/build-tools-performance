import React from 'react';
const LABEL_12209 = 'component_12209';
export function Component12209({ value = 12209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12209, 'data-value': derived.doubled }, children);
}
export default Component12209;
