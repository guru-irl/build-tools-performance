import React from 'react';
const LABEL_8423 = 'component_8423';
export function Component8423({ value = 8423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8423, 'data-value': derived.doubled }, children);
}
export default Component8423;
