import React from 'react';
const LABEL_12446 = 'component_12446';
export function Component12446({ value = 12446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12446, 'data-value': derived.doubled }, children);
}
export default Component12446;
