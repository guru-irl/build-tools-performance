import React from 'react';
const LABEL_5565 = 'component_5565';
export function Component5565({ value = 5565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5565, 'data-value': derived.doubled }, children);
}
export default Component5565;
