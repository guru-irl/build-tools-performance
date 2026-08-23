import React from 'react';
const LABEL_16197 = 'component_16197';
export function Component16197({ value = 16197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16197, 'data-value': derived.doubled }, children);
}
export default Component16197;
