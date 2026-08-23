import React from 'react';
const LABEL_13446 = 'component_13446';
export function Component13446({ value = 13446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13446, 'data-value': derived.doubled }, children);
}
export default Component13446;
