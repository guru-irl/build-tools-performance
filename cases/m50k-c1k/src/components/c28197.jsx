import React from 'react';
const LABEL_28197 = 'component_28197';
export function Component28197({ value = 28197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28197, 'data-value': derived.doubled }, children);
}
export default Component28197;
