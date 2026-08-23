import React from 'react';
const LABEL_13160 = 'component_13160';
export function Component13160({ value = 13160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13160, 'data-value': derived.doubled }, children);
}
export default Component13160;
