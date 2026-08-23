import React from 'react';
const LABEL_36459 = 'component_36459';
export function Component36459({ value = 36459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36459, 'data-value': derived.doubled }, children);
}
export default Component36459;
