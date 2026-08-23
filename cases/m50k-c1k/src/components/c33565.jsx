import React from 'react';
const LABEL_33565 = 'component_33565';
export function Component33565({ value = 33565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33565, 'data-value': derived.doubled }, children);
}
export default Component33565;
