import React from 'react';
const LABEL_10747 = 'component_10747';
export function Component10747({ value = 10747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10747, 'data-value': derived.doubled }, children);
}
export default Component10747;
