import React from 'react';
const LABEL_16074 = 'component_16074';
export function Component16074({ value = 16074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16074, 'data-value': derived.doubled }, children);
}
export default Component16074;
