import React from 'react';
const LABEL_197 = 'component_197';
export function Component197({ value = 197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_197, 'data-value': derived.doubled }, children);
}
export default Component197;
