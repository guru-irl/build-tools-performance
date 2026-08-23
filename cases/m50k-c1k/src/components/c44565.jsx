import React from 'react';
const LABEL_44565 = 'component_44565';
export function Component44565({ value = 44565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44565, 'data-value': derived.doubled }, children);
}
export default Component44565;
