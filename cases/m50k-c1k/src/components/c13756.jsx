import React from 'react';
const LABEL_13756 = 'component_13756';
export function Component13756({ value = 13756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13756, 'data-value': derived.doubled }, children);
}
export default Component13756;
