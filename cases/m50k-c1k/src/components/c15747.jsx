import React from 'react';
const LABEL_15747 = 'component_15747';
export function Component15747({ value = 15747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15747, 'data-value': derived.doubled }, children);
}
export default Component15747;
