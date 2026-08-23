import React from 'react';
const LABEL_16756 = 'component_16756';
export function Component16756({ value = 16756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16756, 'data-value': derived.doubled }, children);
}
export default Component16756;
