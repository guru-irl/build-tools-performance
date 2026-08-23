import React from 'react';
const LABEL_12314 = 'component_12314';
export function Component12314({ value = 12314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12314, 'data-value': derived.doubled }, children);
}
export default Component12314;
