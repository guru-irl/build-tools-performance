import React from 'react';
const LABEL_44876 = 'component_44876';
export function Component44876({ value = 44876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44876, 'data-value': derived.doubled }, children);
}
export default Component44876;
