import React from 'react';
const LABEL_13991 = 'component_13991';
export function Component13991({ value = 13991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13991, 'data-value': derived.doubled }, children);
}
export default Component13991;
