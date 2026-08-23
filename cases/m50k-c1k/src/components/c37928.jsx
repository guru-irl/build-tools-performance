import React from 'react';
const LABEL_37928 = 'component_37928';
export function Component37928({ value = 37928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37928, 'data-value': derived.doubled }, children);
}
export default Component37928;
