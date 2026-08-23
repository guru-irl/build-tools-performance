import React from 'react';
const LABEL_29565 = 'component_29565';
export function Component29565({ value = 29565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29565, 'data-value': derived.doubled }, children);
}
export default Component29565;
