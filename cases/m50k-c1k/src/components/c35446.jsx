import React from 'react';
const LABEL_35446 = 'component_35446';
export function Component35446({ value = 35446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35446, 'data-value': derived.doubled }, children);
}
export default Component35446;
