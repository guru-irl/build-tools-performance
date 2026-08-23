import React from 'react';
const LABEL_13809 = 'component_13809';
export function Component13809({ value = 13809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13809, 'data-value': derived.doubled }, children);
}
export default Component13809;
