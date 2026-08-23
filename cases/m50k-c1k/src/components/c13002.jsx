import React from 'react';
const LABEL_13002 = 'component_13002';
export function Component13002({ value = 13002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13002, 'data-value': derived.doubled }, children);
}
export default Component13002;
