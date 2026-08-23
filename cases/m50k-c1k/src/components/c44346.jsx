import React from 'react';
const LABEL_44346 = 'component_44346';
export function Component44346({ value = 44346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44346, 'data-value': derived.doubled }, children);
}
export default Component44346;
