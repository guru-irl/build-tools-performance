import React from 'react';
const LABEL_25756 = 'component_25756';
export function Component25756({ value = 25756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25756, 'data-value': derived.doubled }, children);
}
export default Component25756;
