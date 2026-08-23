import React from 'react';
const LABEL_35565 = 'component_35565';
export function Component35565({ value = 35565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35565, 'data-value': derived.doubled }, children);
}
export default Component35565;
