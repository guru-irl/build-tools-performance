import React from 'react';
const LABEL_565 = 'component_565';
export function Component565({ value = 565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_565, 'data-value': derived.doubled }, children);
}
export default Component565;
