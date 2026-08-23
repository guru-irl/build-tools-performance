import React from 'react';
const LABEL_22928 = 'component_22928';
export function Component22928({ value = 22928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22928, 'data-value': derived.doubled }, children);
}
export default Component22928;
