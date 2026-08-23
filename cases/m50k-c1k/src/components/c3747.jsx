import React from 'react';
const LABEL_3747 = 'component_3747';
export function Component3747({ value = 3747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3747, 'data-value': derived.doubled }, children);
}
export default Component3747;
