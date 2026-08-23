import React from 'react';
const LABEL_18876 = 'component_18876';
export function Component18876({ value = 18876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18876, 'data-value': derived.doubled }, children);
}
export default Component18876;
