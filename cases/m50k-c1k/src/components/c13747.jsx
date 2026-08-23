import React from 'react';
const LABEL_13747 = 'component_13747';
export function Component13747({ value = 13747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13747, 'data-value': derived.doubled }, children);
}
export default Component13747;
