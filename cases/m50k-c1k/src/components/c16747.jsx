import React from 'react';
const LABEL_16747 = 'component_16747';
export function Component16747({ value = 16747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16747, 'data-value': derived.doubled }, children);
}
export default Component16747;
