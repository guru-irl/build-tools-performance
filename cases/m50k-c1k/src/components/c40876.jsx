import React from 'react';
const LABEL_40876 = 'component_40876';
export function Component40876({ value = 40876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40876, 'data-value': derived.doubled }, children);
}
export default Component40876;
