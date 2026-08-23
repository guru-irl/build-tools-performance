import React from 'react';
const LABEL_3876 = 'component_3876';
export function Component3876({ value = 3876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3876, 'data-value': derived.doubled }, children);
}
export default Component3876;
