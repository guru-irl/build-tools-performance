import React from 'react';
const LABEL_36565 = 'component_36565';
export function Component36565({ value = 36565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36565, 'data-value': derived.doubled }, children);
}
export default Component36565;
