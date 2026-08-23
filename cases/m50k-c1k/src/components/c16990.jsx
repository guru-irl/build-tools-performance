import React from 'react';
const LABEL_16990 = 'component_16990';
export function Component16990({ value = 16990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16990, 'data-value': derived.doubled }, children);
}
export default Component16990;
