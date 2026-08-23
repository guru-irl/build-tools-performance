import React from 'react';
const LABEL_6928 = 'component_6928';
export function Component6928({ value = 6928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6928, 'data-value': derived.doubled }, children);
}
export default Component6928;
