import React from 'react';
const LABEL_13214 = 'component_13214';
export function Component13214({ value = 13214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13214, 'data-value': derived.doubled }, children);
}
export default Component13214;
