import React from 'react';
const LABEL_25747 = 'component_25747';
export function Component25747({ value = 25747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25747, 'data-value': derived.doubled }, children);
}
export default Component25747;
