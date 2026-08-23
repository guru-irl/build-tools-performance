import React from 'react';
const LABEL_13314 = 'component_13314';
export function Component13314({ value = 13314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13314, 'data-value': derived.doubled }, children);
}
export default Component13314;
