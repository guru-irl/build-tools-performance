import React from 'react';
const LABEL_29526 = 'component_29526';
export function Component29526({ value = 29526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29526, 'data-value': derived.doubled }, children);
}
export default Component29526;
