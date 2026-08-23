import React from 'react';
const LABEL_21446 = 'component_21446';
export function Component21446({ value = 21446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21446, 'data-value': derived.doubled }, children);
}
export default Component21446;
