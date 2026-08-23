import React from 'react';
const LABEL_22446 = 'component_22446';
export function Component22446({ value = 22446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22446, 'data-value': derived.doubled }, children);
}
export default Component22446;
