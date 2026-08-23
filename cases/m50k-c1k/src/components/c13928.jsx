import React from 'react';
const LABEL_13928 = 'component_13928';
export function Component13928({ value = 13928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13928, 'data-value': derived.doubled }, children);
}
export default Component13928;
