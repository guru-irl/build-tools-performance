import React from 'react';
const LABEL_13145 = 'component_13145';
export function Component13145({ value = 13145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13145, 'data-value': derived.doubled }, children);
}
export default Component13145;
