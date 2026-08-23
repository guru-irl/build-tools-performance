import React from 'react';
const LABEL_44747 = 'component_44747';
export function Component44747({ value = 44747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44747, 'data-value': derived.doubled }, children);
}
export default Component44747;
