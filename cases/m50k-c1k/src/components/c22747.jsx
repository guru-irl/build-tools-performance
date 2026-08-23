import React from 'react';
const LABEL_22747 = 'component_22747';
export function Component22747({ value = 22747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22747, 'data-value': derived.doubled }, children);
}
export default Component22747;
