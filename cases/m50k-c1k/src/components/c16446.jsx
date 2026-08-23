import React from 'react';
const LABEL_16446 = 'component_16446';
export function Component16446({ value = 16446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16446, 'data-value': derived.doubled }, children);
}
export default Component16446;
