import React from 'react';
const LABEL_9747 = 'component_9747';
export function Component9747({ value = 9747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9747, 'data-value': derived.doubled }, children);
}
export default Component9747;
