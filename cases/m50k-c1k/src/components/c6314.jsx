import React from 'react';
const LABEL_6314 = 'component_6314';
export function Component6314({ value = 6314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6314, 'data-value': derived.doubled }, children);
}
export default Component6314;
