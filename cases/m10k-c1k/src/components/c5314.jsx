import React from 'react';
const LABEL_5314 = 'component_5314';
export function Component5314({ value = 5314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5314, 'data-value': derived.doubled }, children);
}
export default Component5314;
