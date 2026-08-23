import React from 'react';
const LABEL_32565 = 'component_32565';
export function Component32565({ value = 32565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32565, 'data-value': derived.doubled }, children);
}
export default Component32565;
