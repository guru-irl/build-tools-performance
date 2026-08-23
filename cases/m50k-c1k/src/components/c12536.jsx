import React from 'react';
const LABEL_12536 = 'component_12536';
export function Component12536({ value = 12536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12536, 'data-value': derived.doubled }, children);
}
export default Component12536;
