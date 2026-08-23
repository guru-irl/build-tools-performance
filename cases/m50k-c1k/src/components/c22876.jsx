import React from 'react';
const LABEL_22876 = 'component_22876';
export function Component22876({ value = 22876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22876, 'data-value': derived.doubled }, children);
}
export default Component22876;
