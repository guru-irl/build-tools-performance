import React from 'react';
const LABEL_37756 = 'component_37756';
export function Component37756({ value = 37756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37756, 'data-value': derived.doubled }, children);
}
export default Component37756;
